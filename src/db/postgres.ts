import { Client, ClientConfig } from "pg";

let port: number = parseInt(`${process.env.POSTGRES_PORT}`);
let conf: ClientConfig = {
  host: process.env.POSTGRES_HOST,
  port,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
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
  postgress.end();
});

export {
  postgress,
  connectPostgress,
};
