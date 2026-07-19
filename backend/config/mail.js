import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const getTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true only for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

getTransporter.verify((error, success) => {
  if (error) {
    console.error("Transporter Error:", error);
  } else {
    console.log("Mail server is ready.");
  }
});

export default getTransporter;