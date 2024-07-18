import express from "express";
import mongoose from "mongoose";
const router = express.Router();

import serviceController from "../controllers/serviceController";

router.get("/", serviceController.getAllServices);

export default router;
