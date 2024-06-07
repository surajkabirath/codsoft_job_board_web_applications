import { Request, Response, NextFunction } from "express";
import asyncHandler from "../utils/catchAsync";
import User from "../models/User";
import Jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
import AppError from "../utils/AppError";

// generate jwt
const generateToken = (id: string) => {
  return Jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
};
// send Email
const sendEmail = async (option: {
  email: string;
  subject: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: option.email,
    subject: option.subject,
    text: option.message,
  };
  await transporter.sendMail(mailOptions);
};

// Register User
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { image, name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new AppError("User already exists", 400);
    }

    const user = await User.create({
      image,
      name,
      email,
      password,
      role,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(String(user._id)),
      });
    } else {
      throw new AppError("Invalid user data", 400);
    }
  }
);

// Login User
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(String(user._id)),
    });
  } else {
    throw new AppError("Invalid email or password", 401);
  }
});
// Logout User
export const logoutUser = (req: Request, res: Response) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
};

// Forgot Password
export const forgotPassword = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
      throw new AppError('There is no user with that email address', 404);
  }

  const resetToken = crypto.randomBytes(32).toString('hex');
  user.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  user.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes


  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get('host')}/api/auth/resetPassword/${resetToken}`;
  const message = `Forgot your password? Submit a PATCH request with your new password to: ${resetURL}\nIf you didn't forget your password, please ignore this email!`;

  try {
      await sendEmail({
          email: user.email,
          subject: 'Your password reset token (valid for 10 minutes)',
          message,
      });

      res.status(200).json({
          status: 'success',
          message: 'Token sent to email!',
      });
  } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });

      throw new AppError('There was an error sending the email. Try again later!', 500);
  }
});
// // user register
// export const register = async (req: Request, res: Response) => {
//   try {
//     const { name, email, password, role } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword, role });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(400).json({ error: error.message });
//     } else {
//       res.status(400).json({ error: "An unknown error occurred" });
//     }
//   }
// };

// //user login
// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }
//     const token = Jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
//       expiresIn: "1h",
//     });
//     res.status(200).json({ message: "Successfully Logged in" });
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(400).json({ error: error.message });
//     } else {
//       res.status(400).json({ error: "An unknown error occurred" });
//     }
//   }
// };
