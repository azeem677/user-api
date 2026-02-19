import app from "../app.js";
import connectToDatabase from "../db.js";

export default async function handler(req, res) {
	// 1. Ensure DB connection is established
	try {
		await connectToDatabase();
		console.log("✅ MongoDB connected successfully in serverless function");
	} catch (err) {
		console.error("❌ MongoDB connection error in serverless function:", err);
	}

	// 2. Pass the request and response objects directly to the Express app
	// Vercel handles Express apps exported as functions automatically.
	return app(req, res);
}
