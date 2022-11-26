import joi from "joi";

const loginSchema = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().min(4).max(50).required(),
});

export default loginSchema;
