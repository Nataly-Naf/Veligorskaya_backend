import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import isValidId from "../../middlewares/isValidId.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import {
  addSchema,
  contactUpdateFavoriteSchema,
} from "../../models/Contact.js";

const router = express.Router();

// router.get("/", contactsController.getAll);

// router.get("/:contactId", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(addSchema),
  contactsController.addContact
);

// router.delete("/:contactId", isValidId, contactsController.deleteContact);

// router.put(
//   "/:contactId",
//   isValidId,
//   isEmptyBody,
//   validateBody(addSchema),
//   contactsController.updateById
// );

// router.patch(
//   "/:contactId/favorite",
//   isValidId,
//   validateBody(contactUpdateFavoriteSchema),
//   contactsController.updateStatusContact
// );

export default router;
