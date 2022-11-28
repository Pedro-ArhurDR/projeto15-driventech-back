import db from "../database/db.js"
export async function checkoutController(req,res){
    const checkout = req.body
    console.log(checkout)
    try{
        await db.collection('checkout').insertOne({checkout})
        console.log('compra realizada')
        res.sendStatus(202)
       }
       catch{
        res.sendStatus(500)
       }
}