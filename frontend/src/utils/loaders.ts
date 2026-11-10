import axios from "axios";

const loadSkills = async () => {
	try {
		const response = await axios.get("/api/skills");
		return response.data;
	} catch {
		return { error: true };
	}
};

export const skillsLoader = async () => {
	return await loadSkills();
};

const loadProjects = async () => {
	try {
		const response = await axios.get("/api/projects");
		return response.data;
	} catch {
		return { error: true };
	}
};

export const projectsLoader = async () => {
	return await loadProjects();
};
