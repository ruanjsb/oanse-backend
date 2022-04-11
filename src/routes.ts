import { Router } from "express";
import CargoController from "./controllers/CargoController";

const routes = Router();

routes.get('/cargo', CargoController.list);

routes.post('/cargo', CargoController.create);

routes.get('/', async (req, res) => {
    res.send('# API Oanse - MVC #');
});


export default routes;