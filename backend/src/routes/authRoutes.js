import { Router } from "express";
import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getUser,
  logout
} from "../controllers/authController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js"

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuthenticated, logout)
router.post("/forgotpassword", forgotPassword);
router.put("/resetPassword/:token", resetPassword);
router.get("/getuser",isAuthenticated,getUser)

export default router;

