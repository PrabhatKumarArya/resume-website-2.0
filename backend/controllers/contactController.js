import Contact from "../models/Contact.js";
import asyncHandler from "../middleware/asyncHandler.js";
import getTransporter from "../config/mail.js";

/**
 * @desc Save Contact Message
 * @route POST /api/contact
 */
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Save to MongoDB
  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
    status: "new",
  });

  // Send response immediately
  res.status(201).json({
    success: true,
    message: "Message sent successfully.",
    data: contact,
  });

  // Send email in background
  try {
    console.log("📤 Sending owner email...");

    const info = await getTransporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
      sender: `"Portfolio Website" <${process.env.EMAIL_USER}>`,

      // Your personal email
      to: process.env.OWNER_EMAIL,

      replyTo: email,

      subject: `📩 New Portfolio Contact: ${subject}`,

      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>📩 New Portfolio Contact</h2>

          <table cellpadding="8">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Subject</strong></td>
              <td>${subject}</td>
            </tr>
          </table>

          <hr>

          <h3>Message</h3>

          <p>${message}</p>

          <br>

          <a
            href="mailto:${email}"
            style="
              background:#2563eb;
              color:white;
              padding:12px 18px;
              border-radius:8px;
              text-decoration:none;
            "
          >
            Reply to ${name}
          </a>
        </div>
      `,
    });

    console.log("✅ Owner email sent");
    console.log(info);

  } catch (err) {
    console.error("❌ Owner email failed");
    console.error(err);
  }
});

/**
 * @desc Get Contacts
 */
export const getContacts = asyncHandler(async (req, res) => {
  await Contact.updateMany(
    { status: { $exists: false } },
    { $set: { status: "new" } }
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
    message: "Contact deleted successfully",
  });
});

/**
 * @desc Mark as Read
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