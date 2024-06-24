import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import {
  postApplication,
  employeeGetAllApplication,
  jobSeekerGetAllApplication
} from "../controllers/applicationController.js";

const router = express.Router();

router.post("/post", isAuthenticated, postApplication);
router.get("/employee/getall", isAuthenticated, employeeGetAllApplication);
router.get("/jobseeker/getall", isAuthenticated, jobSeekerGetAllApplication)
export default router;
