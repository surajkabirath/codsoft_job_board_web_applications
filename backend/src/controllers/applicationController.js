import asyncHandler from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

import { Application } from "../models/Application.js";

export const postApplication = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "employee") {
    return next(
      new AppError("Employer not allowed to access this resource.", 400)
    );
  }
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new AppError("Resume File Required!", 400));
  }

  const { resume } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(resume.mimetype)) {
    return next(
      new AppError("Invalid file type. Please upload a PNG file.", 400)
    );
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    resume.tempFilePath
  );


  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponse.error || "Unknown Cloudinary error"
    );
    return next(new AppError("Failed to upload Resume to Cloudinary", 500));
  }
  const { name, email, coverLetter, phone, address, jobId } = req.body;
  const applicantID = {
    user: req.user._id,
    role: "job-seeker",
  };

  if (!jobId) {
    return next(new AppError("Job not found!", 404));
  }
  const jobDetails = await Job.findById(jobId);
  if (!jobDetails) {
    return next(new AppError("Job not found!", 404));
  }

  const employerID = {
    user: jobDetails.postedBy,
    role: "employee",
  };
  if (
    !name ||
    !email ||
    !coverLetter ||
    !phone ||
    !address ||
    !applicantID ||
    !employerID ||
    !resume
  ) {
    return next(new AppError("Please fill all fields.", 400));
  }
  const application = await Application.create({
    name,
    email,
    coverLetter,
    phone,
    address,
    applicantID,
    employerID,
    resume: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "Application Submitted!",
    application,
  });
});



// employeeGetAllApplication
export const employeeGetAllApplication = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "job-seeker") {
    return next(
      new AppError("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const { _id } = req.user;
  const applications = await Application.find({ "employeeID.user": _id });
  res.status(200).json({
    success: true,
    applications,
  });
});

// jobSeekerGetAllApplication
export const jobSeekerGetAllApplication = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "employee") {
    return next(
      new AppError("Employer not allowed to access this resource.", 400)
    );
  }
  const { _id } = req.user;
  const applications = await Application.find({ "applicantID.user": _id });
  res.status(200).json({
    success: true,
    applications,
  });
});