// const { responseCustome } = require("../../utils/index.js");
const { Server } = require("socket.io");
module.exports = (http) => {
  const io = new Server(http, {
    cors: {
      origins: ["http://localhost:" + process.env.PORT],
    },
  });
  io.on("connection", (socket) => {
    // Log a new user connected
    console.log(`A new Used Connected ${socket.id}`);
    socket.on("chat message", (msg) => {
      // responseCustome("mensage recibido", 200, data);
      io.emit("chat message", {
        message: msg,
        audio: "notify",
      });
    });

    // tell all clients that someone connected
    io.emit("user joined", socket.id);

    //client sends "user typing" event to server
    socket.on("user typing", function (username) {
      io.emit("user typing", username);
    });

    //client sends "stopped typing" event to server
    socket.on("stopped typing", function (username) {
      io.emit("stopped typing", username);
    });

    // when a new user is disconnected
    socket.on("disconnect", function () {
      console.log(`User left ${socket.id}`);

      //tell all clients that someone disconnected
      socket.broadcast.emit("adios", socket.id);
    });
  });
};
