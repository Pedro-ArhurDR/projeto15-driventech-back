import { Router } from "express";
import { loginController } from "../controllers/loginControlle.js";
import { loginValidate } from "../middlewares/loginValidateMiddleware.js";

const loginRouter = Router();

loginRouter.post("/login", loginValidate, loginController);

export default loginRouter;
