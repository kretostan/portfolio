import axios from "axios";

const loadSkills = async () => {
	try {
		const response = await axios.get("/api/portfolio/skills");
		return response.data.skills;
	} catch {
		return { error: true };
	}
};

export const skillsLoader = async () => {
	return await loadSkills();
};

const loadProjects = async () => {
	try {
		const response = await axios.get(`/api/portfolio/projects`);
		return response.data.projects;
	} catch {
		return { error: true };
	}
};

export const projectsLoader = async () => {
	return await loadProjects();
};
