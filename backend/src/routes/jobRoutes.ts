import { Router } from "express";
import { getAllJobs, postJob } from "../controllers/jobController";
import {  protect } from "../middlewares/authMiddleware";
const router = Router();
router.get("/getall", getAllJobs);
router.post("/post", protect, postJob);
export default router;
