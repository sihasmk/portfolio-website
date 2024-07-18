import mongoose from "mongoose";
import { Document } from "./../../node_modules/bson/src/bson";

const { Schema } = mongoose;

interface IProject {
  title: string;
  category: string;
  technologies: string[];
  thumbnailUrl: string;
  imageUrlList: string[];
}

interface projectModelInterface extends mongoose.Model<ProjectDoc> {
  build(attr: IProject): ProjectDoc;
}

interface ProjectDoc extends mongoose.Document {
  title: string;
  category: string;
  technologies: string[];
  thumbnailUrl: string;
  imageUrlList: string[];
}

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    imageUrlList: {
      type: [String],
    },
  },
  { versionKey: false, timestamps: true }
);

projectSchema.statics.build = (attr: IProject) => {
  return new Project(attr);
};

const Project = mongoose.model<ProjectDoc, projectModelInterface>(
  "project",
  projectSchema
);

export { Project };
