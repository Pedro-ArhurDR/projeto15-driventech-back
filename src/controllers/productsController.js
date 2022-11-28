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

export async function addProductsController(req,res){
   const {nome,valor,url_imagem,descricao} = req.body 
   console.log('passei da validação')
   try{
    await db.collection('products').insertOne({
        nome:nome,
        valor:valor,
        url_imagem:url_imagem,
        descricao:descricao
    })
    console.log('produto adicionado')
    res.sendStatus(202)
   }
   catch{
    res.sendStatus(500)
   }
}