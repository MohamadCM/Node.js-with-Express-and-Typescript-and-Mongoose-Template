import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { Database } from "./config/Database";
import envSetup from "./config/EnvironmentSetup";
import dotenv from "dotenv";
dotenv.config();

// importing route file
import routes from "./routes/routes";

const app: Application = express();
const port: number = Number.parseInt(process.env.PORT || "5000");
// Connect to database
Database.getInstance();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
	res.send("Hello!\n this is node.js template!");
});

// Starting sever
app.listen(port, () => {
	console.log("\x1b[32m", "\x1b[4m", `Server running on ${port}`, "\x1b[0m");
});

// Run pre-configured functions
envSetup();

// Routes
app.use("/", routes);
