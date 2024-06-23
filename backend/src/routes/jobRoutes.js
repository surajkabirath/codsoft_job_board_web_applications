import { Router } from "express";
import { getAllJobs, postJob,getMyJobs } from "../controllers/jobController.js";

import {isAuthenticated} from "../middlewares/authMiddleware.js"
const router = Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs", getMyJobs);

export default router;
