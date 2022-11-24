import { json } from "body-parser";
import express from "express";
import cors from "cors"

const app = express();
app.use(json());
app.use(cors())




app.listen(5000, "Conectado na porta 5000");