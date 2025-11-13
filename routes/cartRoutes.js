
import express from "express";
import Cart from "../models/cartModel.js";

const router = express.Router();

// POST: Save cart (with address)
router.post("/", async (req, res) => {
  try {
    const { items, totalPrice, address } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "❌ Cart is empty" });
    }

    const newCart = new Cart({
      items,
      totalPrice: totalPrice || 0,
      address: address || "No address provided",
    });

    await newCart.save();
    res.status(201).json({ message: "✅ Cart saved successfully", cart: newCart });
  } catch (error) {
    console.error("❌ Error saving cart:", error);
    res.status(500).json({ message: error.message });
  }
});

// GET: Fetch all carts
router.get("/", async (req, res) => {
  try {
    const carts = await Cart.find().sort({ createdAt: -1 });
    res.json(carts);
  } catch (error) {
    console.error("❌ Error fetching carts:", error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ DELETE: Delete a cart/order by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);
    if (!deletedCart) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "✅ Order deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting cart:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
