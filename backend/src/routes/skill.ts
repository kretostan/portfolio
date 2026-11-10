import { Router } from "express";

import { loadSkills } from "../controllers/skill";

// eslint-disable-next-line new-cap
const router = Router();

router.get("/api/skills", loadSkills);

export default router;
