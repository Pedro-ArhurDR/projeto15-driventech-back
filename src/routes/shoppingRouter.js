import { Router } from "express";
import { shoppingController } from "../controllers/shoppingController.js";
import { addShoppingController } from "../controllers/shoppingController.js";
import { addShoppingValidateMiddleware } from "../middlewares/shoppingValidateMiddleware.js";
const shoppingRouter = Router();

shoppingRouter.get("/shopping",shoppingController);
shoppingRouter.post("/shopping",addShoppingValidateMiddleware,addShoppingController)
export default shoppingRouter;
