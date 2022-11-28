import db from "../database/db.js";
import { v4 as uuid } from "uuid";
export async function loginController(req, res) {
  const { email } = req.body;

  try {
    const usersExists = await db.collection("users").findOne({ email });

    const token = uuid();
    await db
      .collection("sessions")
      .insertOne({ userId: usersExists._id, token });

    delete usersExists.senha;
    delete usersExists.senha2;
    res.status(200).send({ usersExists, token });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function FinishSession(req,res){
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ","")
  try{
      await db.collection("sessions").deleteOne({ token });
      return  res.status(200).send({ message: "Sessão finalizada" });
    
  }
  catch(err){
      return  res.status(500).send({message:err.message})
    
  }
}