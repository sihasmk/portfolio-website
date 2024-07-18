import mongoose from "mongoose";
import { Document } from "./../../node_modules/bson/src/bson";

const { Schema } = mongoose;

interface IService {
  title: String;
  icon: String;
  description: String;
}

interface serviceModelInterface extends mongoose.Model<ServiceDoc> {
  build(attr: IService): ServiceDoc;
}

interface ServiceDoc extends mongoose.Document {
  title: String;
  icon: String;
  description: String;
}

const serviceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

serviceSchema.statics.build = (attr: IService) => {
  return new Service(attr);
};

const Service = mongoose.model<ServiceDoc, serviceModelInterface>(
  "service",
  serviceSchema
);

export { Service };
