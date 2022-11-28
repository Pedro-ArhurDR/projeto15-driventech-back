import { Router } from "express";
import { productsController, addProductsController } from "../controllers/productsController.js";
import { addProductsValidate } from "../middlewares/addProductsValidateMiddleware.js";
const productsRouter = Router();

productsRouter.get("/products",productsController);
productsRouter.post("/products",addProductsValidate,addProductsController)
export default productsRouter;
