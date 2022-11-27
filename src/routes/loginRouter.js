import { Router } from "express";
import { loginController } from "../controllers/loginControlle.js";
import { loginValidate,finishSessionValidate } from "../middlewares/loginValidateMiddleware.js";
import { FinishSession } from "../controllers/loginControlle.js";
const loginRouter = Router();

loginRouter.post("/login", loginValidate, loginController);
loginRouter.delete("/login",finishSessionValidate,FinishSession)
export default loginRouter;
