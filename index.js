import express from "express";
import cartRoutes from "./routes/cartRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = 5000;

// ✅ Ensure uploads folder exists
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log("📁 Created 'uploads' folder");
}

// Middleware

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerceDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running on  http://localhost:${PORT}`)
);
