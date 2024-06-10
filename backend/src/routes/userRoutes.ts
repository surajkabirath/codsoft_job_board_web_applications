import express from "express";
import { getUsers } from "../controllers/userController";
import { protect, admin } from "../middlewares/authMiddleware";

const router = express.Router();

router.route("/").get(protect, admin, getUsers);

export default router;
