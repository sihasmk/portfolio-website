import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import cors from "cors";

// import routes
import testimonialRoutes from "./routes/testimonialRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import projectRoutes from "./routes/projectRoutes";
import { Project } from "./models/projectModel";
import { Service } from "./models/serviceModel";
import { Testimonial } from "./models/testimonialModel";

const app = express();
const port = 3000;
app.use(json());
app.use(cors());

const uri =
  "mongodb+srv://sihaskumarasingha:O4zt4HVESoGUdzYi@portfolio-website.tqxw9w9.mongodb.net/portfolio?appName=portfolio-website";

const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions as mongoose.ConnectOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    app.get("/", (req, res) => {
      res.send("Hello, TypeScript Node Express!");
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}

run().catch(console.dir);
app.use("/testimonials", testimonialRoutes);
app.use("/services", serviceRoutes);
app.use("/projects", projectRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
