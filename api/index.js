import serverless from "serverless-http";
import app from "../app.js";
import connectToDatabase from "../db.js";

const handler = serverless(app);

export default async function (req, res) {
	try {
		await connectToDatabase();
	} catch (err) {
		console.error("❌ Error connecting to MongoDB:", err);
		// Continue to handler; requests will fail if DB is required
	}
	return handler(req, res);
}
