import express, { json } from "express";
import cors from "cors";
import routers from "./routes/index.js";

const app = express();
app.use(json());
app.use(cors());
app.use(routers);

app.listen(5000, () => {
  console.log("Conectado");
});
