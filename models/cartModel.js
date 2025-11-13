import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
      picture: String,
      color: String,
      quantity: { type: Number, default: 1 },
    },
  ],
  address: {
    fullName: String,
    email: String,
    phone: Number,
    city: String,
    street: String,
    province: String,
  },
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Cart", cartSchema);
