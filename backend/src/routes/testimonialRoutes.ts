import express from "express";
import mongoose from "mongoose";
const router = express.Router();

import testimonialController from "../controllers/testimonialController";

router.get("/", testimonialController.getAllTestimonials);
router.post("/", testimonialController.addTestimonial);

export default router;
