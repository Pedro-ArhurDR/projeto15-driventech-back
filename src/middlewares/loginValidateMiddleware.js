import db from "../database/db.js";
import loginSchema from "../schemas/loginSchema.js";
import bcrypt from "bcrypt";

export async function loginValidate(req, res, next) {
  const user = req.body;
  const { email, senha } = user;

  const { error } = loginSchema.validate(user, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(401).send(errors);
  }

  try {
    const userExists = await db.collection("users").findOne({ email });
    console.log(userExists);
    if (!userExists) {
      console.log("aqui");
      return res.sendStatus(401);
    }
    console.log(userExists);
    if (!bcrypt.compareSync(senha, userExists.senha)) {
      console.log("aqui");
      return res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}
export async function finishSessionValidate(req,res,next){
  console.log('validação')
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ","")
  if(!token){
      res.sendStatus(404)
      return
  }
next()
}
