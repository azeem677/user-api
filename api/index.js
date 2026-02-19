import app from "../app.js";
import connectToDatabase from "../db.js";

export default async function handler(req, res) {
	try {
		// 1. Ensure DB connection is established before processing
		await connectToDatabase();
	} catch (err) {
		console.error("❌ MongoDB connection error:", err);
		return res.status(500).json({
			message: "Database connection failed",
			error: err.message,
			tip: "Please ensure MONGODB_URI is correctly set in Vercel settings and that your MongoDB Atlas cluster allows connections from all IP addresses (0.0.0.0/0)."
		});
	}

	// 2. Pass the request and response objects to the Express app
	return app(req, res);
}
