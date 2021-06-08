import express, { Router } from "express";
import apiRouter from "./api/routes";

const router: Router = express.Router();

router.use("/api", apiRouter);

export default router;
