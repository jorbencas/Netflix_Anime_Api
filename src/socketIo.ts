// const { responseCustome } = require("../../utils/index.js");
import { Server } from "socket.io";
export default (http:any) => {
  const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(http, {
    cors: {
      origins: ["http://localhost:" + process.env.PORT],
    },
  });
  io.on("connection", (socket) => {
    // Log a new user connected
    console.log(`A new Used Connected ${socket.id}`);
    // tell all clients that someone connected
    io.emit("user joined", {
      id: socket.id,
      audio: "/chat-leat",
    });

    socket.on("chat message", (msg) => {
      // responseCustome("mensage recibido", 200, data);
      io.emit("chat message", {
        message: msg,
        audio: "notify",
      });
    });

    //client sends "user typing" event to server
    socket.on("user typing", function (id) {
      io.emit("user typing", id);
    });

    //client sends "stopped typing" event to server
    socket.on("stopped typing", function (id) {
      io.emit("stopped typing", id);
    });

    // when a new user is disconnected
    socket.on("disconnect", function () {
      console.log(`User left ${socket.id}`);

      //tell all clients that someone disconnected
      socket.broadcast.emit("adios", {
        id: socket.id,
        audio: "/chat-leat",
      });
    });
  });
};
