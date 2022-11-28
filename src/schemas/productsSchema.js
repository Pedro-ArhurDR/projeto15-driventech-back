import joi from "joi";

const productsSchema = joi.object({
  nome: joi.string().required(),
  valor: joi.number().min(1).required(),
  descricao: joi.string().required(),
  url_imagem:joi.string().required().uri()
});

export default productsSchema;
