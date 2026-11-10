import { type Document, model, Schema } from "mongoose";
import type { ISkill } from "../types";

const skillSchema = new Schema<ISkill & Document>({
	category: {
		en: String,
		pl: String,
	},
	content: {
		en: String,
		pl: String,
	},
});

export const Skill = model<ISkill & Document>("Skill", skillSchema);
