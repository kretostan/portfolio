import mongoose from "mongoose";

const dbUri = process.env.MONGO_URI as string;

const connectToDatabase = async (): Promise<void> => {
	await mongoose.connect(dbUri);
	console.log("Connected to MongoDB");
};

export default connectToDatabase;
