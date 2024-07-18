import mongoose from "mongoose";
import { Document } from "./../../node_modules/bson/src/bson";

const { Schema } = mongoose;

interface ITestimonial {
  name: String;
  phone_number: String;
  testimonial: String;
  role: String;
  organization: String;
}

interface testimonialModelInterface extends mongoose.Model<TestimonialDoc> {
  build(attr: ITestimonial): TestimonialDoc;
}

interface TestimonialDoc extends mongoose.Document {
  name: String;
  phone_number: String;
  testimonial: String;
  role: String;
  organization: String;
}

const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

testimonialSchema.statics.build = (attr: ITestimonial) => {
  return new Testimonial(attr);
};

const Testimonial = mongoose.model<TestimonialDoc, testimonialModelInterface>(
  "testimonial",
  testimonialSchema
);

export { Testimonial };
