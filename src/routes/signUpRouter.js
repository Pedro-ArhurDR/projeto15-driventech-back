import { Router } from "express";
import signUpValidateMiddleware from "../middlewares/signUpValidateMiddleware.js";
import { signUpPost } from "../controllers/signUpController.js";
const signUpRouter = Router();

signUpRouter.post("/sign-up", signUpValidateMiddleware, signUpPost);

export default signUpRouter;