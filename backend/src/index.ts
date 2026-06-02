import cors from "cors";
import express from "express";
import "./util/dotenv";

import contactRouter from "./routes/contact";
import projectRouter from "./routes/project";
import skillRouter from "./routes/skill";
import connectToDatabase from "./util/database";

const app = express();
const port = Number(process.env.PORT) || 3000;

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

connectToDatabase();

app.get("/health", (_req, res) => res.json({ status: "OK" }));

app.listen(port || 3000, () => {
	console.log(`Server running on port ${port}`);
});
