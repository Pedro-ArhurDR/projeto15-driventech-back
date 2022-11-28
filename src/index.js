import express, { json } from "express";
import cors from "cors";
import routers from "./routes/index.js";

const app = express();
app.use(json());
app.use(cors());
app.use(routers);

const port = process.env.PORT 
app.listen(port,() => console.log(`Server running in port:${port}`) )