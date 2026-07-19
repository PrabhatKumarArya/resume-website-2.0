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

  await Promise.all([

    // ==========================
    // Email to Portfolio Owner
    // ==========================
    getTransporter.sendMail({

      from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Portfolio Contact: ${subject}`,

      html: `
        <h2>📩 New Portfolio Contact</h2>

        <table style="border-collapse:collapse;width:100%;">
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
            text-decoration:none;
            border-radius:8px;
          "
        >
          Reply to ${name}
        </a>
      `,
    }),

    // ==========================
    // Auto Reply to Visitor
    // ==========================
    getTransporter.sendMail({

      from: `"Prabhat Kumar Arya" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",

      html: `
        <h2>Hello ${name},</h2>

        <p>
          Thank you for contacting me through my portfolio website.
        </p>

        <p>
          I have successfully received your message.
        </p>

        <p>
          I usually reply within <strong>24–48 hours.</strong>
        </p>

        <p>
          Regards,<br>
          <strong>Prabhat Kumar Arya</strong>
        </p>

        <p>
          <a href="${process.env.PORTFOLIO_URL}">
            🌐 Visit Portfolio
          </a>
        </p>

        <p>
          <a
            href="${process.env.RESUME_URL}"
            style="
              background:#06b6d4;
              color:white;
              padding:12px 20px;
              text-decoration:none;
              border-radius:8px;
              display:inline-block;
            "
          >
            📄 Download Resume
          </a>
        </p>

        <hr style="margin:35px 0;">

        <div
          style="
            background:#0f172a;
            color:#ffffff;
            padding:30px;
            border-radius:12px;
            text-align:center;
          "
        >

          <h2 style="margin:0;">
            Prabhat Kumar Arya
          </h2>

          <p style="color:#94a3b8;">
            Full Stack Developer
          </p>

          <p>
            <a href="mailto:prabhatkumararya9@gmail.com" style="color:#38bdf8;">Email</a> |
            <a href="https://github.com/PrabhatKumarArya" style="color:#38bdf8;">GitHub</a> |
            <a href="https://linkedin.com/in/prabhat-kumar-arya-883a79324" style="color:#38bdf8;">LinkedIn</a> |
            <a href="${process.env.PORTFOLIO_URL}" style="color:#38bdf8;">Portfolio</a>
          </p>

          <p style="font-size:13px;color:#94a3b8;">
            © ${new Date().getFullYear()} Prabhat Kumar Arya. All Rights Reserved.
          </p>

        </div>
      `,

      // Uncomment after testing if you want attachment
      /*
      attachments: [
        {
          filename: "My_Resume.pdf",
          path: process.env.RESUME_URL
        }
      ]
      */

    }),

  ]);

  console.log("✅ Emails sent successfully.");

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