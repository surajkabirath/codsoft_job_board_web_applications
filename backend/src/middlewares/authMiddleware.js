import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 
import asyncHandler from "../utils/catchAsync.js";
import AppError from '../utils/AppError.js';


export const isEmployeeAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies.employeeToken;
  console.log("🚀 ~ isEmployeeAuthenticated ~ token:", token)
 

  if (!token) {
    return next(new AppError('Employee Not Authorized - No token provided', 401));
  }

    const verifyEmployee = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findOne({_id: verifyEmployee._id});
    if(req.user.role !== 'employee'){
      return next(new AppError(`${req.user.role} is not authorized for this resources!`, 400));
    }

next();
  
});

// export const isJobSeekerAuthenticated = asyncHandler(
//   async (req, res, next) => {
//     const token = req.cookies.jobSeekerToken;
//     if (!token) {
//       return next(new AppError("job Seeker is not authenticated", 400));
//     }

//     const verifyJobSeeker = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("🚀 ~ verifyJobSeeker:", verifyJobSeeker)
//     req.user = await User.findOne({ _id: verifyJobSeeker._id });
//     if (req.user.role !== "job_seeker") {
//       return next(
//         new AppError(
//           `${req.user.role} is not authorized for this resources!`,
//           400
//         )
//       );
//     }
//     next();
//   }
// );

export const isJobSeekerAuthenticated = asyncHandler(
  async (req, res, next) => {
    const token = req.cookies.jobSeekerToken;
    if (!token) {
      return next(new AppError("Patient is not authenticated", 400));
    }

    const verifyJobSeeker = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ _id: verifyJobSeeker._id });
    if (req.user.role !== "job-seeker") {
      return next(
        new AppError(
          `${req.user.role} is not authorized for this resources!`,
          400
        )
      );
    }
    next();
  }
);