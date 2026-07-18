import dotenv from "dotenv";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const admin = await Admin.create({
    email: "prabhatkumararya9@gmail.com",
    password: "admin123",
  });

  console.log("Admin created:", admin.email);

  process.exit();
};

createAdmin();