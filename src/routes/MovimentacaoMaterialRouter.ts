import { Router } from "express";
import MovimentacaoMaterialController from "../controllers/MovimentacaoMaterialController";


const router = Router();

router.get('/', MovimentacaoMaterialController.list);

router.get('/:id', MovimentacaoMaterialController.listOne);

// router.put('/:id', MaterialController.update);

router.post('/', MovimentacaoMaterialController.create);

// router.delete('/:id', MaterialController.delete);

export default router;