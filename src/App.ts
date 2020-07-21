import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

const app: Application = express();
const port: number = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hadish sales app");
});

app.listen(port, () => {
    console.log("\x1b[32m", "\x1b[4m", `Server running on ${port}`, "\x1b[0m");
});
