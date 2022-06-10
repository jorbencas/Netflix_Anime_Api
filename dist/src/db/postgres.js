"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectPostgress = exports.postgress = void 0;
const pg_1 = require("pg");
let port = parseInt(`${process.env.POSTGRES_PORT}`);
let conf = {
    host: process.env.POSTGRES_HOST,
    port,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
};
const postgress = new pg_1.Client(conf);
exports.postgress = postgress;
const connectPostgress = () => {
    postgress
        .connect()
        .then(() => console.log("Connected to Postgres"))
        .catch((err) => console.error("connection Postgress error", err.stack));
};
exports.connectPostgress = connectPostgress;
process.on("uncaughtException", (error) => {
    console.error(error);
    postgress.end();
});
