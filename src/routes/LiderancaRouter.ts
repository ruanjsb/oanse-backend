import { Router } from "express";
import LiderancaController from "../controllers/LiderancaController";

const router = Router();

router.get('/', LiderancaController.list);

router.get('/:id', LiderancaController.listOne);

//router.put('/:id', LiderancaController.update);

router.post('/', LiderancaController.create);

//router.delete('/:id', LiderancaController.delete);

export default router;