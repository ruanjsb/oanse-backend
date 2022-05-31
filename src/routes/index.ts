import { Router } from "express";
import CargoRouter from "./CargoRouter";
import MaterialRouter from "./MaterialRouter";
import TipoMaterialRouter from "./TipoMaterialRouter";
import MovimentacaoMaterialRouter from "./MovimentacaoMaterialRouter"
import LiderancaRouter from "./LiderancaRouter"

const router = Router();

router.use("/cargo", CargoRouter);
router.use("/material", MaterialRouter);
router.use("/tipo-material", TipoMaterialRouter)
router.use("/movimentacao", MovimentacaoMaterialRouter);
router.use("/lideranca", LiderancaRouter)

export default router;
