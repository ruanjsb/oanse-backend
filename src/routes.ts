import { Router } from "express";
import CargoController from "../controllers/CargoController";

const routes = Router();

routes.get('/cargo', CargoController.index);

routes.post('/cargo', CargoController.insert);

routes.get('/', async (req, res) => {
    res.send('# API Oanse - MVC #');
});


export default routes;