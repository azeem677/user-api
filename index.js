import app from "./app.js";
import connectToDatabase from "./db.js";

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectToDatabase();
    console.log("✅ MongoDB connected (local)");
  } catch (err) {
    console.error("❌ MongoDB connection error (local):", err.message || err);
  }

  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
})();
