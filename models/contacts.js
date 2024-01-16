import { Schema, model } from "mongoose";
// import { handleSaveError, addUpdateSettings } from "./hooks.js";
import Joi from "joi";
import { handleMongooseError } from "../helpers/index.js";

export const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `"name" cannot be an empty field`,
    "any.required": `"name" is a required field`,
  }),
  surname: Joi.string(),
  email: Joi.string().email().required().messages({
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `"email" is a required field`,
  }),
  phone: Joi.number().required().messages({
    "string.empty": `"phone" cannot be an empty field`,
    "string.base": `"phone" should be a type of 'number'`,
    "any.required": `"phone" is a required field`,
  }),
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
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

contactSchema.post("save", handleMongooseError);
// contactSchema.pre("findOneAndUpdate", addUpdateSettings);
// contactSchema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
