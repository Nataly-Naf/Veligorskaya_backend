import { Schema, model } from "mongoose";
import { handleSaveError, addUpdateSettings } from "./hooks.js";
import Joi from "joi";
import handleMongooseError from "../helpers/handleMongooseError.js";

export const addSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
});

export const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  surname: {
    type: String,
    required: [false],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

contactSchema.post("save", handleMongooseError);
contactSchema.pre("findOneAndUpdate", addUpdateSettings);
contactSchema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
