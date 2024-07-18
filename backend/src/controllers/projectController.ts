import { Request, Response } from "express";
import { Project } from "../models/projectModel";

const getAllProjects = async (req: Request, res: Response) => {
  try {
    Project.find({})
      .sort({ createdAt: -1 })
      .then((data) => res.json(data))
      .catch((error) => res.status(408).json({ error }));
  } catch (error) {
    console.log(error);
  }
};

export default { getAllProjects };
