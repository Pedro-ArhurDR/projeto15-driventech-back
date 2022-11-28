import db from "../database/db.js";

export async function requestController(req, res) {
  const info_pedido = req.body;
  try {
    await db.collection("requests").insertOne({ info_pedido });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
