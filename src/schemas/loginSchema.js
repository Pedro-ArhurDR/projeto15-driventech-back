import joi from "joi";

const loginSchema = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().min(4).max(50).required(),
  Bearer:joi.any()
});

export default loginSchema;
