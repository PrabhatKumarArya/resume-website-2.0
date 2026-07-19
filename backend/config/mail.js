import dotenv from "dotenv";
import nodemailer from "nodemailer";
import dns from "dns";

dotenv.config();

dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

transporter.verify((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Mail server ready");
  }
});

export default transporter;