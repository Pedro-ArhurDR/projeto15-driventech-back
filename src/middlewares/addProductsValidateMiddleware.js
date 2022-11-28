import db from "../database/db.js"
import { ObjectID } from "bson"
export async function addProductsValidate(req,res,next){
    const {authorization} = req.headers

    try{
        const token = authorization?.replace("Bearer ","")
        console.log(token)
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
