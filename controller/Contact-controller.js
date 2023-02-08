import ContactUser from "../models/Contactus-model.js";

export const Contactus = (req, res) => {
  res.send("page is woking");
};

export const Contactdata = (req, res) => {
  res.json({ hello: "working" });
};
