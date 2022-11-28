import { Router } from "express";
import { requestController } from "../controllers/requestController.js";

const requestRouter = Router();
requestRouter.post("/request", requestController);

export default requestRouter;
