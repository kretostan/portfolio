import { Document, model, Schema } from "mongoose";
import { IProject } from "../types";

const projectSchema = new Schema<IProject & Document>({
	title: String,
	description: {
		en: String,
		pl: String,
	},
	stack: { type: [String], required: true },
	image: { type: String, required: true },
	page: { type: String, required: true },
	github: { type: String, required: true },
});

export const Project = model<IProject & Document>("Project", projectSchema);
