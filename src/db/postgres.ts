import { Client, ClientConfig } from "pg";
import { POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER } from "../config";

let conf: ClientConfig = {
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD
};

const postgress = new Client(conf);

const connectPostgress = () => {
  postgress
    .connect()
    .then(() => console.log("Connected to Postgres"))
    .catch((err) => console.error("connection Postgress error", err.stack));
};

process.on("uncaughtException", (error) => {
  console.error(error);
    console.log('====================================');
  console.log("HOLA MUNDO ESTA ES EL SERVIDOR");
  console.log('====================================');
  postgress.end();
});

export {
  postgress,
  connectPostgress,
};
