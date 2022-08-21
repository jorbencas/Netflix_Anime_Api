"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app_1 = __importDefault(require("./app"));
const socketIo_1 = __importDefault(require("./socketIo"));
const server = (0, node_http_1.createServer)(app_1.default);
(0, socketIo_1.default)(server);
const port = parseInt(`${process.env.PORT}`) || 0;
const hostname = process.env.HOSTNAME || "127.0.0.1";
server.listen(port, hostname, () => {
    console.log(`El servidor esta corriendo: 😱 😋 http://${hostname}:${port}`);
}).on("error", (e) => {
    console.log("Address in use, retrying..." + e.message);
}).close();
