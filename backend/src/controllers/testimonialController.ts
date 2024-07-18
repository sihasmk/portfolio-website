import { Request, Response } from "express";
import { Testimonial } from "../models/testimonialModel";

const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    Testimonial.find({})
      .sort({ createdAt: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(408).json({ error });
      });
  } catch (error) {
    console.log(error);
  }
};

const addTestimonial = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const newTestimonial = Testimonial.build(body);
    await newTestimonial.save();
    res.status(201).json({ message: "New testimonial uploaded...!" });
  } catch (error) {
    res.status(409).json({ message: "Could not add testimonial... :(", error });
  }
};

export default { getAllTestimonials, addTestimonial };
