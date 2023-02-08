import mongoose from "mongoose";

const ContactScheme = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ContactUser = mongoose.model("Contactuser", ContactScheme);

export default ContactUser;
