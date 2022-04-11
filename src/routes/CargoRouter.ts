import { Router } from "express";
import CargoController from "../controllers/CargoController";

const router = Router();

router.get('/', CargoController.list);

router.get('/:id', CargoController.listOne);

router.post('/', CargoController.create);

router.delete('/:id', CargoController.delete);

export default router;