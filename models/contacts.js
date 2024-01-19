import { Schema, model } from "mongoose";
// import { handleSaveError, addUpdateSettings } from "./hooks.js";
import Joi from "joi";
import { handleMongooseError } from "../helpers/index.js";

export const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `Поле "і'мя" не може бути пустим. Введіть свої дані`,
    "any.required": `"Ім'я" є обов'язковим полем`,
  }),
  surname: Joi.string(),
  email: Joi.string().email().required().messages({
    "string.empty": `Поле "адреса електронної пошти" не може бути пустим. Введіть свої дані`,
    "any.required": `"Адреса електронної пошти" є обов'язковим полем`,
  }),
  phone: Joi.number().required().messages({
    "string.empty": `Поле "номер телефону" не може бути пустим. Введіть свої дані`,
    "string.base": `"Номер телефону" повинен містити лише цифри`,
    "any.required": `"Номер телефону" є обов'язковим полем`,
  }),
});

export const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  surname: {
    type: String,
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
