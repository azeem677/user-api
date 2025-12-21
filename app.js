import express from "express";
import cartRoutes from "./routes/cartRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes - mount both `/api/...` and root paths so endpoints work locally and on Vercel
app.use(["/api/products", "/products"], productRoutes);
app.use(["/api/carts", "/carts"], cartRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ecommerceDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

export default app;
