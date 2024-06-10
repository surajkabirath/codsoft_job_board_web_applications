import { Request, Response } from "express";
import asyncHandler from "../utils/catchAsync";
import User from "../models/User";
import AppError from "../utils/AppError";

// Get all users(admins)
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json(users);
});
