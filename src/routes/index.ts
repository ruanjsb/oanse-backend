import { Router } from "express";
import CargoRouter from "./CargoRouter";

const router = Router();

router.use("/cargo", CargoRouter);

export default router;
