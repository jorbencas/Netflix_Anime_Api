import { config } from "dotenv";
config();
import { connectMongo } from "./mongo";
import { connectPostgress } from "./postgres";

export default function DBConnect() {
    connectMongo();
    connectPostgress();
};