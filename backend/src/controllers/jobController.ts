import { Request, Response, NextFunction } from "express";
import Job from "../models/Job";

import asyncHandler from "../utils/catchAsync";
import AppError from "../utils/AppError";

export const getAllJobs = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const jobs = await Job.find({ expired: false });
    res.status(200).json({
      success: true,
      jobs,
    });
  }
);

export const postJob = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.user!;
    if (role === "Job Seeker") {
      throw new AppError(
        "Job Seeker not allowed to access this resource.",
        400
      );
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
    const postedBy = req.user!._id
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
    } );
    if (job) {
      res.status(201).json({
        sucess:true,
        message: "Job Posted Successfully!",
        job,
        
      });
    } else {
      throw new AppError("Invalid Job data", 400);
    }
  }
);
