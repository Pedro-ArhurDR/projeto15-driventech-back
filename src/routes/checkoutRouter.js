import { Router } from "express";
import { checkoutController } from "../controllers/checkoutController.js";
const checkoutRouter = Router();

checkoutRouter.post("/checkout",checkoutController)
export default checkoutRouter;
