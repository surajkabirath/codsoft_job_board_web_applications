import asyncHandler from "../utils/catchAsync.js";
import User from "../models/User.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import AppError from "../utils/AppError.js";
import { generateToken } from "../utils/jwtToken.js";

// Send Email
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

// Register User
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return next(new AppError("Please fill all fields.", 400));
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new AppError("User Already Exists with this Email.", 400));
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  generateToken(user, "User Registered Successfully !!😍", 200, res);
});

// Login User
export const loginUser = asyncHandler(async (req, res,next) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return next(new AppError("Please provide email, password, and role", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new AppError("Invalid email or password", 401));
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new AppError("Invalid email or password", 401));
  }

  if (user.role !== role) {
    return next(new AppError(
      `User with provided email and ${role} role not found!`,
      404
    ));
  }

  // res.json({
  //   message: "Logged in successfully!",
  //   user,
  //   token: generateToken(String(user._id)),
  // });
  generateToken(user, `${user.role} Logged in Successfully !!😍`, 200, res);
});

// Logout User
export const logoutUser = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
};

// Forgot Password
export const forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    throw new AppError("There is no user with that email address", 404);
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  user.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  user.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/auth/resetPassword/${resetToken}`;
  const message = `Your password reset token is:\n\n${resetURL}\n\nIf you have not requested this email, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 minutes)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    throw new AppError(
      "There was an error sending the email. Try again later!",
      500
    );
  }
});

// Reset Password
export const resetPassword = asyncHandler(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    throw new AppError("Token is invalid or has expired", 400);
  }

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  res.status(200).json({
    status: "success",
    message: "Password has been reset",
    token: generateToken(String(user._id)),
  });
});
