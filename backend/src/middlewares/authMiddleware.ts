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
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split("")[1];
    }
    if (!token) {
      throw new AppError("Not Authorized, no token", 401);
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as Decoded;

    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      throw new AppError(
        "The user belonging to this token does no longer exist.",
        401
      );
    }

    next();
  }
);

export const admin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    throw new AppError("Not authorized as an admin", 403);
  }
};
