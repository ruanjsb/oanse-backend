import { Router } from "express";
import TipoMaterialController from "../controllers/TipoMaterialController";

const router = Router();

router.get('/', TipoMaterialController.list);

router.get('/:id', TipoMaterialController.listOne);

router.put('/:id', TipoMaterialController.update);

router.post('/', TipoMaterialController.create);

router.delete('/:id', TipoMaterialController.delete);

export default router;