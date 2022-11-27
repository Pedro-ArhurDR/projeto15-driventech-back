import db from "../database/db.js";
import { ObjectID } from "bson";
export async function addShoppingValidateMiddleware(req,res,next){
    console.log('validação')
    const {userId} = req.body
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ","")

    const userExist = await db?.collection('users').findOne({_id: ObjectID(userId)})
    console.log('VALIDAÇAO RODANDO')
    if(!userExist){
        console.log('usuario nao encontrado')
        return res.sendStatus(404)
    }
    if(!token){
        res.sendStatus(404)
        return
    }
    next()
}