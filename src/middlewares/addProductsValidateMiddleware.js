import db from "../database/db.js"
import { ObjectID } from "bson"
import productsSchema from "../schemas/productsSchema.js";
export async function addProductsValidate(req,res,next){
    const {authorization} = req.headers
    const product = req.body
    const { error } = productsSchema.validate(product, { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(401).send(errors);
    }
    try{
        const token = authorization?.replace("Bearer ","")
        console.log(token,'TOKEN')
        if(!token){
        console.log('token nao fornecido')
        return res.sendStatus(401)
        }
        const session =  await db.collection("sessions").findOne({token})
        const myId = session.userId.toString()
        const myEmail =  await db.collection("users").find({_id: ObjectID(myId)}).toArray()
        console.log(myEmail)
        const validateEmail = myEmail[0].email
        console.log(validateEmail)
        if(validateEmail!=="admin@hotmail.com"){
            console.log('email invalido para adiconar produtos')
            return res.sendStatus(401)
        }
    }
    catch{
        res.sendStatus(500)
    }
    next()
}
