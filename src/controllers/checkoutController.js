export async function checkoutController(req,res){
    const checkout = req.body

    try{
        await db.collection('checkout').insertOne({checkout})
        console.log('compra realizada')
        res.sendStatus(202)
       }
       catch{
        res.sendStatus(500)
       }
}