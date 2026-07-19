import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const getTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

getTransporter.verify((error, success) => {
  if (error) {
    console.error("Transporter Error:", error);
  } else {
    console.log("Mail server is ready.");
  }
});

export default getTransporter;