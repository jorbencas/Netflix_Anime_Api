const { Client } = require("pg");
const postgress = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const connectPostgress = async () => {
  await postgress
    .connect()
    .then(() => console.log("Connected to Postgres"))
    .catch((err) => console.error("connection Postgress error", err.stack));
};

process.on("uncaughtException", (error) => {
  console.error(error);
  postgress.end();
});

module.exports = {
  postgress,
  connectPostgress,
};
