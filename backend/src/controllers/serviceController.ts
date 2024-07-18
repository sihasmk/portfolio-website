import { Request, Response } from "express";
import { Service } from "../models/serviceModel";

const getAllServices = async (req: Request, res: Response) => {
  try {
    Service.find({})
      .sort({ createdAt: -1 })
      .then((data) => res.json(data))
      .catch((error) => res.status(408).json({ error }));
  } catch (error) {
    console.log(error);
  }
};

export default { getAllServices };
