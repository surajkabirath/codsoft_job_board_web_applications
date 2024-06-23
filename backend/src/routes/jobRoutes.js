import { Router } from "express";
import { getAllJobs, postJob } from "../controllers/jobController.js";

import {isEmployeeAuthenticated,isJobSeekerAuthenticated} from "../middlewares/authMiddleware.js"
const router = Router();

router.get("/getall", isJobSeekerAuthenticated, getAllJobs);
router.post("/post", isEmployeeAuthenticated, postJob);

export default router;
