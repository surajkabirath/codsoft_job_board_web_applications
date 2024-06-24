import Job from "../models/Job.js"; // Adjust path as per your project structure

import asyncHandler from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

export const getAllJobs = asyncHandler(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });
  res.status(200).json({
    success: true,
    message: "Here the list of all jobs",
    jobs,
  });
});

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
    return next(
      new AppError("Please either provide fixed salary or ranged salary.", 400)
    );
  }
  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new AppError("Cannot Enter Fixed and Ranged Salary together.", 400)
    );
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

// getMyJobs

export const getMyJobs = asyncHandler(async (req, res, next) => {
  const role = req.user;
  if (role === "job-seeker") {
    return next(
      new AppError("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const myJobs = await Job.find({ postedBy: req.user._id });
  res.status(200).json({
    success: true,
    myJobs,
  });
});

// updatejob

export const updateJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  // console.log(`User role: ${role}`);

  if (role === "job-seeker") {
    return next(
      new AppError("Job Seeker not allowed to access this resource.", 400)
    );
  }

  const { id } = req.params;
  // console.log(`Job ID: ${id}`);

  let job;
  try {
    job = await Job.findById(id);
    // console.log(job); // Log the job details
  } catch (error) {
    console.error(`Error fetching job: ${error.message}`);
    return next(new AppError("Invalid Job ID format.", 400));
  }

  if (!job) {
    console.log(`Job not found with ID: ${id}`);
    return next(new AppError("OOPS! Job not found.", 404));
  }

  try {
    job = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    // console.log(`Updated Job: ${job}`); // Log the updated job details
  } catch (error) {
    console.error(`Error updating job: ${error.message}`);
    return next(new AppError("Failed to update job. Please try again.", 500));
  }

  res.status(200).json({
    success: true,
    message: "Job Updated!",
    job, // Return updated job for verification
  });
});

// deleteJob
export const deleteJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "job-seeker") {
    return next(
      new AppError("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return next(new AppError("OOPS! Job not found.", 404));
  }
  await job.deleteOne();
  res.status(200).json({
    success: true,
    message: "Job Deleted!",
  });
});

// getJobById
export const getJobById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // console.log("🚀 ~ getJobById ~ id:", id)
  try {
    const job = await Job.findById(id);
    // console.log("🚀 ~ getJobById ~ job:", job)
    if (!job) {
      return next(new AppError("Job not found.", 404));
    }
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    // console.log("🚀 ~ getJobById ~ error:", error)
    return next(new AppError(`Invalid ID / CastError`, 404));
  }
});