import { Router } from "express";
import { registerUser,loginUser,logoutUser, forgotPassword } from "../controllers/authController";
const router = Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/logout', logoutUser);
router.post("/forgotpassword", forgotPassword);
export default router;
