import { Router } from "express";
import loginRouter from "./loginRouter.js";
import signUpRouter from "./signUpRouter.js";
import productsRouter from "./productsRouter.js";
import shoppingRouter from "./shoppingRouter.js";

const routers = Router();
routers.use(signUpRouter);
routers.use(loginRouter);
routers.use(productsRouter)
routers.use(shoppingRouter)
export default routers;
