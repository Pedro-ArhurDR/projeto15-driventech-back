import db from "../database/db.js";
import { ObjectID } from "bson";
export async function shoppingController(req,res){
    const { authorization } = req.headers;
    console.log(authorization,'seu token')
    try{
        const token = authorization?.replace("Bearer ","")
        if(!token){
        return res.sendStatus(401)
        }

        const session =  await db.collection("sessions").findOne({token})
        const myId = session.userId.toString()
        const myProducts = await db.collection("shopping").find({_id: ObjectID(myId)}).toArray()
        res.send(myProducts)
    }
    catch{
        res.sendStatus(500)
    }
}


//adiciona produtos ao carrinho
export async function addShoppingController(req,res){
    console.log('RODANDO SHOPPING')
    const {userId,product,price,image} = req.body
    try{
        await db.collection('shopping').insertOne({
            userId:userId,
            product:product,
            image:image,
            price:price,
        })
        res.sendStatus(201)
    }
    catch{
        res.sendStatus(500)
    }
}

