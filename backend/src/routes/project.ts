import { Router } from "express";

import { loadProjects } from "../controllers/project";

// eslint-disable-next-line new-cap
const router = Router();

router.get("/projects", loadProjects);

export default router;
