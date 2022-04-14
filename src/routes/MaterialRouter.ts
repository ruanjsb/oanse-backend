import { Router } from "express";
import MaterialController from "../controllers/MaterialController";

const router = Router();

router.get('/', MaterialController.list);

router.get('/:id', MaterialController.listOne);

router.put('/:id', MaterialController.update);

router.post('/', MaterialController.create);

router.delete('/:id', MaterialController.delete);

export default router;