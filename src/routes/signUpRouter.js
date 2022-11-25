import { Router } from "express";

const signUpRouter = Router();

signUpRouter.post("/sign-up", signUpValidate);