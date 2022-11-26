import signUpSchema from "../schemas/signUpSchema.js";
import db from "../database/db.js";
export default async function signUpValidateMiddleware(req, res, next) {
  const user = req.body;
  const userCollection = db.collection("users");

  const { error } = signUpSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(401).send(errors);
  }

  try {
    const emailExists = await userCollection.findOne({ email: user.email });
    if (emailExists) {
      return res.status(401).send("Email já cadastrado !");
    }
    const cpfExists = await userCollection.findOne({ cpf: user.cpf });
    if (cpfExists) {
      return res.status(401).send("CPF já cadastrado !");
    }
  } catch (error) {
    res.sendStatus(500);
  }
  next();
}
