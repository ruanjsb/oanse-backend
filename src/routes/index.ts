import { Router } from "express";
import CargoRouter from "./CargoRouter";
import MaterialRouter from "./MaterialRouter";

const router = Router();

router.use("/cargo", CargoRouter);
router.use("/material", MaterialRouter);

export default router;
