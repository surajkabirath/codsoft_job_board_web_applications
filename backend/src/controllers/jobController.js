
import Job from "../models/Job.js"; // Adjust path as per your project structure

import asyncHandler from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

export const getAllJobs = asyncHandler(async (req, res, next) => {
  const jobs = await Job.find();
  res.status(200).json({
    success: true,
    message: "Here the list of all jobs",
    jobs,
  });
});


// Get all jobs or jobs by a specific employee
// export const getAllJobs = asyncHandler(async (req, res, next) => {
//   const { employeeId } = req.query;

//   let jobs;
//   if (employeeId) {
//     jobs = await Job.find({ postedBy: employeeId });
//   } else {
//     jobs = await Job.find();
//   }

//   res.status(200).json({
//     success: true,
//     message: "Here is the list of all jobs",
//     jobs,
//   });
// });





export const postJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "job-seeker") {
    throw new AppError("Job Seeker not allowed to access this resource.", 400);
  }
  const {
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
  } = req.body;
  if (!title || !description || !category || !country || !city || !location) {
    throw new AppError("Please provide full job details.", 400);
  }
  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(new AppError("Please either provide fixed salary or ranged salary.", 400));
  }
  if (salaryFrom && salaryTo && fixedSalary) {
    return next(new AppError("Cannot Enter Fixed and Ranged Salary together.", 400));
  }

  const postedBy = req.user._id;
  const job = await Job.create({
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
    postedBy,
  });
  if (job) {
    res.status(201).json({
      success: true,
      message: "Job Posted Successfully!",
      job,
    });
  } else {
    throw new AppError("Invalid Job data", 400);
  }
});
