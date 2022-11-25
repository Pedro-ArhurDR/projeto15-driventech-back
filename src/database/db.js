import { MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoCliente = new MongoClient(process.env.MONGO_URI);
await mongoCliente.connect();
const db = mongoCliente.db("driven-tech");

export default db;

