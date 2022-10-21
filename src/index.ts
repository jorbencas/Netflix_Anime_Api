import { createServer } from "node:http";
import "dotenv/config";
import app from './app';
import sockets from "./socketIo";
const server = createServer(app);
sockets(server);
const port: number = parseInt(`${process.env.PORT}`) || 0;
const hostname: string = process.env.HOSTNAME || "127.0.0.1";
server.listen(port, hostname, () => {
  console.log(`El servidor esta corriendo: 😱 😋 http://${hostname}:${port}`);
}).on("error", (e) => {
  console.log("Address in use, retrying..." + e.message);
}).close();