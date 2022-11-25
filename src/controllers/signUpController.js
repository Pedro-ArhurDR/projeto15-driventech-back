import db from "../database/db.js";
import bcrypt from "bcrypt";

export async function signUpPost(req, res) {
  const user = req.body;
  const hashPassword = bcrypt.hashSync(user.senha, 10);
  const hashPassword2 = bcrypt.hashSync(user.senha2, 10);

  try {
    await db.collection("users").insertOne({
      ...user,
      senha: hashPassword,
      senha2: hashPassword2,
    });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
