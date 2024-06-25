import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutEmployee,
  forgotPassword,
  resetPassword,
  logoutJobSeeker,
  getUser
} from "../controllers/authController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js"

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/employeelogout", logoutEmployee);
router.get("/jobseekerlogout", logoutJobSeeker);
router.post("/forgotpassword", forgotPassword);
router.put("/resetPassword/:token", resetPassword);
router.get("/getuser",isAuthenticated,getUser)

export default router;

