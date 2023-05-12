import { createServer, Server } from "node:http";
import {PORT, HOSTNAME} from "./config";
import app from './app';
import sockets from "./socketIo";
// import { connectMongo } from "./db/mongo";
import { connectPostgress } from "./db/postgres";
import { ServerOptions } from "socket.io";
(async ()=>{
  const server: (Server | ServerOptions) = createServer(app);
  sockets(server);
  connectPostgress();
  try {
    await server.listen(PORT, HOSTNAME);
    console.log(`El servidor esta corriendo: 😱 😋 http://${HOSTNAME}:${PORT}`);
  } catch (e: any) {
    console.log("Address in use, retrying..." + e.message);
    server.close();
  };
})()