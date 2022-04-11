import { Router } from "express";
import CargoController from "../controllers/CargoController";

const router = Router();

router.get('/', CargoController.list);

router.post('/', CargoController.create);

export default router;