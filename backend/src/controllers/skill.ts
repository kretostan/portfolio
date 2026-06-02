import { Request, Response } from "express";
import { Skill } from "../models/skill";

export const loadSkills = async (_req: Request, res: Response) => {
	const skills = await Skill.find();

	return res.json(skills);
};
