import Contact from "../models/Contact.js";
import asyncHandler from "../middleware/asyncHandler.js";
import getTransporter from "../config/mail.js";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
/**
 * @desc    Save a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = asyncHandler(async (req, res) => {

  const { name, email, subject, message } = req.body;

  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
    status: "new",
  });

  res.status(201).json({
    success: true,
    message: "Message sent successfully.",
    data: contact,
  });

  // Send emails asynchronously
 try {

  console.log("📤 Sending owner email...");

  const ownerMail = getTransporter.sendMail({
    from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `📩 New Portfolio Contact: ${subject}`,
    html: `...`
  });

  console.log("📤 Sending visitor email...");

  const visitorMail = getTransporter.sendMail({
    from: `"Prabhat Kumar Arya" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank you for contacting me!",
    html: `...`
  });

  await Promise.all([ownerMail, visitorMail]);

  console.log("✅ Both emails sent successfully.");

} catch (err) {

  console.error("❌ Mail Error:", err);

}
});


/**
 * @desc    Get all contact messages
 * @route   GET /api/contact
 * @access  Admin
 */
export const getContacts = asyncHandler(async (req, res) => {

  await Contact.updateMany(
    {
      status: { $exists: false }
    },
    {
      $set: {
        status: "new"
      }
    }
  );

  const contacts = await Contact.find().sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts,
  });

});


/**
 * @desc Delete Contact
 * @route DELETE /api/contact/:id
 */
export const deleteContact = asyncHandler(async (req, res) => {

  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: "Contact message not found",
    });
  }

  await contact.deleteOne();

  res.status(200).json({
    success: true,
    message: "Contact message deleted successfully",
  });

});


/**
 * @desc Mark Message as Read
 * @route PATCH /api/contact/:id/read
 */
export const markAsRead = asyncHandler(async (req, res) => {

  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: "Message not found",
    });
  }

  contact.status = "read";

  await contact.save();

  res.status(200).json({
    success: true,
    message: "Message marked as read",
    data: contact,
  });

});