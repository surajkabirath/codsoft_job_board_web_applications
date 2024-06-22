import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import asyncHandler from "../utils/catchAsync";
import AppError from "../utils/AppError";

interface Decoded {
  id: string;
}
interface AuthenticatedRequest extends Request {
  user?: any; // Adjust the type according to your User model
}

// Middleware to protect routes from unauthenticated users
export const protect = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
const {token } = req.cookies
if(!token){
  throw new AppError("User Not Authorized", 401);
}
const decoded = jwt.verify(token,process.env.JWT_SECRET!) as Decoded
const user = await User.findById(decoded.id)
if(!user){
  throw new AppError("No user found with this id", 404);
}
req.user = user
next()
  }
);

// export const admin = (
//   req: AuthenticatedRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (req.user && req.user.role === "admin") {
//     next();
//   } else {
//     throw new AppError("Not authorized as an admin", 403);
//   }
// };
