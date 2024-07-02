import { Router } from "express";
import SondaController from "../Controllers/sondaController.js";

const routes = Router()
const sondaController = new SondaController()

routes.post('/', sondaController.insertSonda)
routes.get("/", sondaController.getSondas)
routes.get("/:id", sondaController.getSondasId)

export default routes