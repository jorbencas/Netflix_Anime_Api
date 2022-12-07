import { createServer, Server } from "node:http";
import {PORT, HOSTNAME} from "./config";
import app from './app';
import sockets from "./socketIo";
import "./db/index";
import { ServerOptions } from "socket.io";
const server: (Server | ServerOptions) = createServer(app);
sockets(server);
(async ()=>{
try {
  await server.listen(PORT, HOSTNAME);
  console.log(`El servidor esta corriendo: 😱 😋 http://${HOSTNAME}:${PORT}`);
} catch (e: any) {
  console.log("Address in use, retrying..." + e.message);
  server.close();
}})()