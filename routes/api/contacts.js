import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { addSchema } from "../../models/contacts.js";

const router = express.Router();

router.post(
  "/",
  isEmptyBody,
  validateBody(addSchema),
  contactsController.addContact
);

export default router;
