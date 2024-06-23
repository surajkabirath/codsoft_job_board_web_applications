import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutEmployee,
  forgotPassword,
  resetPassword,
  logoutJobSeeker
} from "../controllers/authController.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/employeelogout", logoutEmployee);
router.get("/jobseekerlogout", logoutJobSeeker);
router.post("/forgotpassword", forgotPassword);
router.put("/resetPassword/:token", resetPassword);

export default router;

