import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Allowed Origins
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
];

console.log("Allowed Origins:", allowedOrigins);

// CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman and server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);

      return callback(
        new Error(`CORS Error: ${origin} is not allowed`)
      );
    },

    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio Backend Running Successfully",
  });
});

// API Routes
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Global Error Handler
app.use(errorHandler);

export default app;