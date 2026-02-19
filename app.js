import express from "express";
import cartRoutes from "./routes/cartRoutes.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes - mount both `/api/...` and root paths so endpoints work locally and on Vercel
app.use(["/api/products", "/products"], productRoutes);
app.use(["/api/carts", "/carts"], cartRoutes);
app.use(["/api/users", "/users"], userRoutes);

export default app;
