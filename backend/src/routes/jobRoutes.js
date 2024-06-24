import { Router } from "express";
import { getAllJobs, postJob,getMyJobs, updateJob, deleteJob, getJobById } from "../controllers/jobController.js";

import {isAuthenticated} from "../middlewares/authMiddleware.js"
const router = Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs",isAuthenticated, getMyJobs);
router.put("/update/:id",isAuthenticated,updateJob)
router.delete("/delete/:id",isAuthenticated,deleteJob)
router.get("/singlejob/:id", isAuthenticated, getJobById)

export default router;
