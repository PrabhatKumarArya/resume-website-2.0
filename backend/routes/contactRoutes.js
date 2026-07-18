import express from "express";

import {
  createContact,
  getContacts,
  deleteContact,
  markAsRead
} from "../controllers/contactController.js";

import validateContact from "../middleware/validateContact.js";
import validateRequest from "../middleware/validateRequest.js";
import protect from "../middleware/authMiddleware.js";


const router = express.Router();


// Public Route
// Anyone can send a contact message
router.post(
  "/",
  validateContact,
  validateRequest,
  createContact
);



// Protected Admin Routes

// Get all messages
router.get(
  "/",
  protect,
  getContacts
);


// Delete message
router.delete(
  "/:id",
  protect,
  deleteContact
);


// Mark message as read
router.patch(
  "/:id/read",
  protect,
  markAsRead
);


export default router;