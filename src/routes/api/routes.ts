import express, { Router } from "express";
import userRouter from "./users/routes";

const router: Router = express.Router();

router.use("/users", userRouter);

export default router;
