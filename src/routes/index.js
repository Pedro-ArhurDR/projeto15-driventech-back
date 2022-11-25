import { Router } from "express";
import signUpRouter from "./signUpRouter.js";

const routers = Router();
routers.use(signUpRouter);

export default routers;
