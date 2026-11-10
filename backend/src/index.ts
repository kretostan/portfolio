import cors from "cors";
import dotenv from "dotenv";
import express from "express";

if (process.env.NODE_ENV === "development") dotenv.config({ path: ".env.dev" });

import contactRouter from "./routes/contact";
import projectRouter from "./routes/project";
import skillRouter from "./routes/skill";
import connectToDatabase from "./util/database";

const app = express();
const port = Number(process.env.PORT);

const allowedOrigins = [
	"http://localhost:5173",
	"http://localhost:8080",
	"https://kretostan.com",
	"https://www.kretostan.com",
];

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Origins not allowed"));
			}
		},
		credentials: true,
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(skillRouter);
app.use(projectRouter);
app.use(contactRouter);

app.get("/api/health", (_req, res) => res.json({ status: "OK" }));

async function start(): Promise<void> {
	try {
		await connectToDatabase();
		app.listen(port || 3000, () => {
			console.log("Server running on port ", port || 3000);
		});
	} catch (error) {
		console.error("Backend startup failed: ", error);
		process.exit(1);
	}
}

void start();
