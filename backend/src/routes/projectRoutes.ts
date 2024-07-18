import express from "express";
import mongoose from "mongoose";
const router = express.Router();

import projectController from "../controllers/projectController";

router.get("/", projectController.getAllProjects);

export default router;
