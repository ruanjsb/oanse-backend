import { Router } from "express";
import CargoController from "../controllers/CargoController";

const router = Router();

router.get('/cargo', CargoController.list);

router.post('/cargo', CargoController.create);

export default router;