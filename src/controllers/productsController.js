import db from "../database/db.js";


export async function productsController(req,res){
    try{
        const allRecords = await db.collection("products").find().toArray()
        res.send(allRecords)
    }
    catch{
        res.sendStatus(500)
    }
}
