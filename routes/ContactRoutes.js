import express from "express";
import { Contactdata, Contactus } from "../controller/Contact-controller.js";

const Route = express.Router();

Route.get("/", Contactus);
Route.get("/contactus", Contactdata);

export default Route;
