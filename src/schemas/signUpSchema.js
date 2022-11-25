import joi from "joi";

const signUpSchema = joi.object({
  nome: joi.string().min(3).max(50).required(),
  cpf: joi.string().min(11).max(11).required(),
  email: joi.string().email().required(),
  senha: joi.string().min(4).max(50),
  senha2: joi.string().min(4).max(50),
});

export default signUpSchema;
