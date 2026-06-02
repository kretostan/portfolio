import axios from "axios";

const loadSkills = async () => {
	const response = await axios.get("/api/portfolio/skills");
	if (response.status !== 200) {
		throw new Error("Failed to load skills");
	}
	return response.data;
};

export const skillsLoader = async () => {
	return {
		skills: await loadSkills(),
	};
};

const loadProjects = async () => {
	const response = await axios.get(`/api/portfolio/projects`);
	if (response.status !== 200) {
		throw new Error("Failed to load projects");
	}
	return response.data.projects;
};

export const projectsLoader = async () => {
	return {
		projects: await loadProjects(),
	};
};
