import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 
import asyncHandler from "../utils/catchAsync.js";
import AppError from '../utils/AppError.js';



export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log("🚀 ~ isAuthenticated ~ token:", token)
  
  if (!token) {
    return next(new AppError("User Not Authorized", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
});