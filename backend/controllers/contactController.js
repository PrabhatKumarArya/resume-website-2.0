import Contact from "../models/Contact.js";
import asyncHandler from "../middleware/asyncHandler.js";
import getTransporter from "../config/mail.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

  // ==========================
  // Email to Portfolio Owner
  // ==========================
  // await getTransporter.sendMail({
  //   from: process.env.EMAIL_USER,
  //   to: process.env.EMAIL_USER,
  //   subject: `📩 New Portfolio Contact: ${subject}`,
  //   html: `
  //     <h2>New Portfolio Contact</h2>

  //     <p><strong>Name:</strong> ${name}</p>

  //     <p><strong>Email:</strong> ${email}</p>

  //     <p><strong>Subject:</strong> ${subject}</p>

  //     <hr>

  //     <p>${message}</p>
  //   `,
  // });

  // ==========================
  // Auto Reply to Visitor
  // ==========================
  // await getTransporter.sendMail({
  //   from: `"Prabhat Kumar Arya" <${process.env.EMAIL_USER}>`,
  //   to: email,
  //   subject: "Thank you for contacting me!",
  //   html: `
  //     <div style="
  //         max-width:650px;
  //         margin:auto;
  //         font-family:Arial,sans-serif;
  //         border:1px solid #e5e5e5;
  //         border-radius:12px;
  //         overflow:hidden;
  //     ">

  //       <div style="
  //           background:#0f172a;
  //           color:white;
  //           padding:30px;
  //           text-align:center;
  //       ">

  //         <h1 style="margin:0;">
  //           Thank You!
  //         </h1>

  //         <p style="margin-top:10px;">
  //           Your message has been received successfully.
  //         </p>

  //       </div>

  //       <div style="padding:30px;">

  //         <h2>Hello ${name},</h2>

  //         <p>
  //           Thank you for contacting me through my portfolio website.
  //         </p>

  //         <p>
  //           I have successfully received your message regarding:
  //         </p>

  //         <blockquote style="
  //             background:#f5f5f5;
  //             padding:15px;
  //             border-left:5px solid #06b6d4;
  //         ">
  //           <strong>${subject}</strong>
  //         </blockquote>

  //         <p>
  //           I appreciate your interest and will review your message shortly.
  //         </p>

  //         <p>
  //           I usually respond within
  //           <strong>24–48 hours.</strong>
  //         </p>

  //         <hr>

  //         <p>
  //           Best Regards,
  //         </p>

  //         <h3 style="margin-bottom:5px;">
  //           Prabhat Kumar Arya
  //         </h3>

  //         <p>
  //           Full Stack Developer
  //         </p>

  //       </div>

  //       <div style="
  //           background:#0f172a;
  //           color:#cbd5e1;
  //           text-align:center;
  //           padding:18px;
  //       ">

  //         © ${new Date().getFullYear()} Prabhat Kumar Arya

  //       </div>

  //       </div>
  //       <hr>
  //       <p>
  //       You can also connect with me:
  //       </p>

  //       <div style="margin-top:25px;">

  //       <a
  //       href="https://github.com/PrabhatKumarArya"
  //       style="
  //       background:#24292f;
  //       color:white;
  //       padding:12px 20px;
  //       text-decoration:none;
  //       border-radius:8px;
  //       margin-right:10px;
  //       display:inline-block;
  //       ">
  //       GitHub
  //       </a>

  //       <a
  //       href="https://linkedin.com/in/prabhat-kumar-arya-883a79324"
  //       style="
  //       background:#0A66C2;
  //       color:white;
  //       padding:12px 20px;
  //       text-decoration:none;
  //       border-radius:8px;
  //       margin-right:10px;
  //       display:inline-block;
  //       ">
  //       LinkedIn
  //       </a>

  //       <a
  //       href="https://my-portfolio-website-5-1.vercel.app/"
  //       style="
  //       background:#06b6d4;
  //       color:white;
  //       padding:12px 20px;
  //       text-decoration:none;
  //       border-radius:8px;
  //       display:inline-block;
  //       ">
  //       Portfolio
  //       </a>

  //     </div>
  //   `,
  //     attachments: [
  //     {
  //       filename: "My_Resume.pdf",
  //       path: path.join(__dirname, "../public/My_Resume.pdf"),
  //     },
  //   ],
  // });

  res.status(201).json({
    success: true,
    message: "Message sent successfully.",
    data: contact,
  });

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