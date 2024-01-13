import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import { addSchema } from "../../models/contacts.js";

const router = express.Router();

router.post(
  "/",
  isEmptyBody,
  validateBody(addSchema),
  contactsController.addContact
);

export default router;
