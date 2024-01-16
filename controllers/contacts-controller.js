import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import Contact from "../models/contacts.js";

const addContact = async (req, res) => {
  const { email } = req.body;
  const contact = await Contact.findOne({ email });
  if (contact) {
    throw HttpError(409, "Email already exists");
  }

  const result = await Contact.create(req.body);
  console.log(req.body);
  res.status(201).json(result);
};

export default {
  addContact: ctrlWrapper(addContact),
};
