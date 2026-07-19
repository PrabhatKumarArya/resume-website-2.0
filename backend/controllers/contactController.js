import Contact from "../models/Contact.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { sendBrevoEmail } from "../config/mail.js";// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
/**
 * @desc    Save a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = asyncHandler(async (req, res) => {

  console.log("🔥 Contact API Hit");

  const { name, email, subject, message } = req.body;

  console.log("📩 Request Body:", { name, email, subject });

  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
    status: "new",
  });

  console.log("✅ Contact Saved:", contact._id);

  res.status(201).json({
    success: true,
    message: "Message sent successfully.",
    data: contact,
  });

  console.log("📤 Starting Brevo...");

    console.log("BREVO_API_KEY Loaded:", !!process.env.BREVO_API_KEY);
  console.log(
    "BREVO_API_KEY Prefix:",
    process.env.BREVO_API_KEY?.substring(0, 10)
  );

  try {
    console.log("📤 Sending Owner Email...");

    const ownerResult = await sendBrevoEmail({
          sender: {
            name: process.env.SENDER_NAME,
            email: process.env.SENDER_EMAIL,
          },
          to: [
            {
              email: "prabhatkumararya09@gmail.com",
              name: "Test User",
            },
          ],
          replyTo: {
            email,
            name,
          },
          subject: `📩 New Portfolio Contact: ${subject}`,
          htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body{
                margin:0;
                padding:40px;
                background:#f5f7fb;
                font-family:Arial,sans-serif;
            }
            .container{
                max-width:650px;
                margin:auto;
                background:#fff;
                border-radius:10px;
                overflow:hidden;
                box-shadow:0 10px 30px rgba(0,0,0,.1);
            }
            .header{
                background:#111827;
                color:#fff;
                text-align:center;
                padding:35px;
            }
            .content{
                padding:40px;
            }
            .subject{
                background:#f3f4f6;
                border-left:5px solid #06b6d4;
                padding:15px;
                margin:20px 0;
                font-weight:bold;
            }
            .button{
                display:inline-block;
                padding:12px 22px;
                color:white !important;
                text-decoration:none;
                border-radius:6px;
                margin-right:10px;
            }
            .github{background:#24292f;}
            .linkedin{background:#0077b5;}
            .portfolio{background:#06b6d4;}
            .footer{
                background:#111827;
                color:white;
                text-align:center;
                padding:18px;
            }
          </style>
        </head>

        <body>

          <div class="container">

            <div class="header">
              <h1>Thank You!</h1>
              <p>Your message has been received successfully.</p>
            </div>

            <div class="content">

              <h2>Hello ${name},</h2>

              <p>
              Thank you for contacting me through my portfolio website.
              </p>

              <p>I have successfully received your message regarding:</p>

              <div class="subject">
              ${subject}
              </div>

              <p>
              I appreciate your interest and will review your message shortly.
              </p>

              <p>
              I usually respond within <b>24–48 hours.</b>
              </p>

              <hr>

              <p>
              Best Regards,
              </p>

              <h3>Prabhat Kumar Arya</h3>

              <p>Full Stack Developer</p>

              <br>

              <div style="display:flex;flex-wrap:wrap;gap:15px;margin-top:30px;">

                <a
                href="https://github.com/PrabhatKumarArya"
                style="
                display:inline-block;
                padding:12px 22px;
                background:#24292f;
                color:#fff;
                text-decoration:none;
                border-radius:6px;
                font-weight:bold;
                ">
                GitHub
                </a>

                <a
                href="https://linkedin.com/in/prabhat-kumar-arya-883a79324"
                style="
                display:inline-block;
                padding:12px 22px;
                background:#0077b5;
                color:#fff;
                text-decoration:none;
                border-radius:6px;
                font-weight:bold;
                ">
                LinkedIn
                </a>

                <a
                href="${process.env.PORTFOLIO_URL}"
                style="
                display:inline-block;
                padding:12px 22px;
                background:#06b6d4;
                color:#fff;
                text-decoration:none;
                border-radius:6px;
                font-weight:bold;
                ">
                Portfolio
                </a>

                <a
                href="https://my-portfolio-website-5-1.vercel.app/assets/My_Resume.pdf"
                style="
                display:inline-block;
                padding:12px 22px;
                background:#16a34a;
                color:#fff;
                text-decoration:none;
                border-radius:6px;
                font-weight:bold;
                ">
                📄 Download Resume
                </a>

              </div>

            </div>

            <div class="footer">

              © 2026 Prabhat Kumar Arya

            </div>

          </div>

        </body>
      </html>
      `
    });

    // await getTransporter.sendTransacEmail({
    //   sender: {
    //     name: process.env.SENDER_NAME,
    //     email: process.env.SENDER_EMAIL,
    //   },

    //   to: [
    //     {
    //       email: process.env.SENDER_EMAIL,
    //       name: process.env.SENDER_NAME,
    //     },
    //   ],

    //   replyTo: {
    //     email,
    //     name,
    //   },

    //   subject: `📩 New Portfolio Contact: ${subject}`,

    //   htmlContent: `
    //     <h2>📩 New Portfolio Contact</h2>

    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>

    //     <hr>

    //     <p>${message}</p>
    //   `,
    // });

    console.log("Owner Result:", ownerResult);

    console.log("✅ Owner Email Sent");

    console.log("📤 Sending Visitor Email...");

     const visitorResult = await sendBrevoEmail({
      sender: {
        name: process.env.SENDER_NAME,
        email: process.env.SENDER_EMAIL,
      },
      to: [
        {
          email,
          name,
        },
      ],
      subject: "Thank you for contacting me!",
      htmlContent: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me through my portfolio website.</p>

        <p>Your message has been received successfully.</p>

        <p>I usually reply within <strong>24–48 hours.</strong></p>

        <br>

        <p>
          Regards,<br>
          <strong>${process.env.SENDER_NAME}</strong>
        </p>

        <p>
          <a href="${process.env.PORTFOLIO_URL}">
            Visit Portfolio
          </a>
        </p>
      `,
    });

    console.log("✅ Visitor Email Sent");

    console.log("Visitor Result:", visitorResult);

  } catch (err) {
    console.error("❌ Brevo Error:", err);
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