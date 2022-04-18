import { Router } from "express";
import CargoRouter from "./CargoRouter";
import MaterialRouter from "./MaterialRouter";
import MovimentacaoMaterialRouter from "./MovimentacaoMaterialRouter"

const router = Router();

router.use("/cargo", CargoRouter);
router.use("/material", MaterialRouter);
router.use("/movimentacao", MovimentacaoMaterialRouter);

export default router;
