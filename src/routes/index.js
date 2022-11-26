import { Router } from "express";
import loginRouter from "./loginRouter.js";
import signUpRouter from "./signUpRouter.js";

const routers = Router();
routers.use(signUpRouter);
routers.use(loginRouter);

export default routers;
