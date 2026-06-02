import express from "express";

import { sendMail } from "../controllers/contact";

// eslint-disable-next-line new-cap
const router = express.Router();

router.post("/send-mail", sendMail);

export default router;
