import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import {Database} from "../config/Database";

//importing route files
import auth from "./routes/api/users/auth";

const app: Application = express();
const port: number = 5000 || process.env.PORT;
//Connect to database
Database.getInstance();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hadish sales app");
});

// Starting sever
app.listen(port, () => {
    console.log("\x1b[32m", "\x1b[4m", `Server running on ${port}`, "\x1b[0m");
});

//Routes
app.use("/api/users/auth", auth);