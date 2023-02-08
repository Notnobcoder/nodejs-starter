import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";

// sample imports
import Route from "./routes/ContactRoutes.js";

// configraions
dotenv.config();
const app = express();
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// port varibles
const PORT = process.env.LOCALPORT;
const MONGOPORT = process.env.MONGO_LOCALPORT;

app.use("/", Route);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
