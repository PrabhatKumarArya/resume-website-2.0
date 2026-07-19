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
    await Promise.all ([
        await getTransporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `📩 New Portfolio Contact: ${subject}`,
        html: `
          <h2>📩 New Portfolio Contact</h2>

          <table>
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${subject}</td></tr>
          </table>

          <hr>

          <p>${message}</p>
        `,
        }),
        await getTransporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `📩 ${subject}`,
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

          <br>

          <p>
            Regards,<br>
            <strong>Prabhat Kumar Arya</strong>
          </p>

          <p>
            <a href="${process.env.PORTFOLIO_URL}">
              Visit Portfolio
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
              Download My Resume
            </a>
          </p>

          <hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;">

        <div
            style="
              text-align:center;
              background:#0f172a;
              color:#cbd5e1;
              padding:30px;
              border-radius:12px;
              margin-top:20px;
            "
            >

            <h2
              style="
                color:#ffffff;
                margin:0;
              "
            >
              Prabhat Kumar Arya
            </h2>

            <p
              style="
                margin:8px 0 20px;
                color:#94a3b8;
                font-size:15px;
              "
            >
              Full Stack Developer
            </p>

            <div style="margin-bottom:20px;">

              <a
                href="mailto:prabhatkumararya9@gmail.com"
                style="
                  color:#38bdf8;
                  text-decoration:none;
                  margin:0 10px;
                "
              >
                Email
              </a>

              |

              <a
                href="https://github.com/PrabhatKumarArya"
                style="
                  color:#38bdf8;
                  text-decoration:none;
                  margin:0 10px;
                "
              >
                GitHub
              </a>

              |

              <a
                href="https://linkedin.com/in/prabhat-kumar-arya-883a79324"
                style="
                  color:#38bdf8;
                  text-decoration:none;
                  margin:0 10px;
                "
              >
                LinkedIn
              </a>

              |

              <a
                href="${process.env.PORTFOLIO_URL}"
                style="
                  color:#38bdf8;
                  text-decoration:none;
                  margin:0 10px;
                "
              >
                Portfolio
              </a>

            </div>

            <a
              href="${process.env.RESUME_URL}"
              style="
                display:inline-block;
                background:#06b6d4;
                color:#ffffff;
                text-decoration:none;
                padding:12px 24px;
                border-radius:8px;
                font-weight:bold;
                margin-bottom:20px;
              "
            >
              📄 Download Resume
            </a>

            <p
              style="
                font-size:14px;
                color:#cbd5e1;
                margin-top:20px;
                line-height:1.6;
              "
            >
              Thank you for reaching out.<br>
              I appreciate your interest and will get back to you as soon as possible.
            </p>

            <p
              style="
                font-size:12px;
                color:#94a3b8;
                margin-top:25px;
              "
            >
              © ${new Date().getFullYear()} Prabhat Kumar Arya. All Rights Reserved.
            </p>

          </div>
            `,
        // Keep attachments disabled until email works reliably.
        // attachments: [
        //   {
        //     filename: "My_Resume.pdf",
        //     path: path.join(__dirname, "../public/My_Resume.pdf"),
        //   },
        // ],
        }),
        console.log("Emails sent successfully."),
    ])
    } catch (err) {
        console.error("Mail Error:", err);
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