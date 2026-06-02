import mongoose from "mongoose";

const dbUri = process.env.MONGO_URI as string;

const connectToDatabase = async (): Promise<void> => {
	try {
		await mongoose.connect(dbUri);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		throw error;
	}
};

export default connectToDatabase;
