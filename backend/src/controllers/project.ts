import { Request, Response } from "express";
import { Project } from "../models/project";
import { IProject } from "../types";

type ProjectResponse = {
	message?: string;
	error?: string;
	projects?: IProject[];
};

export const loadProjects = async (
	_req: Request,
	res: Response<ProjectResponse>,
) => {
	try {
		const projects = await Project.find();
		if (projects.length === 0) {
			return res.status(200).json({ message: "No projects available" });
		}
		return res.status(200).json({ projects });
	} catch (error) {
		console.error("Error loading projects:", error);
		return res.status(500).json({ error: "Failed to load projects" });
	}
};
