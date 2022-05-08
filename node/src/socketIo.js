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

    // tell all clients that someone connected
    io.emit("user joined", socket.id);

    //the client sends 'chat:message event'
    socket.on("chat:message", function (message) {
      // Emit this Event to all clients connected
      io.emit("chat:message", message);
    });

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
      socket.broadcast.emit("user left", socket.id);
    });
  });
};

// let users = [];

// const addUser = (userId, socketId) => {
//   !users.some((user) => user.userId === userId) &&
//     users.push({ userId, socketId });
// };

// const removeUser = (socketId) => {
//   users = users.filter((user) => user.socketId !== socketId);
// };

// const getUser = (userId) => {
//   return users.find((user) => user.userId === userId);
// };

// io.on("connection", (socket) => {
//   //when ceonnect
//   console.log("a user connected.");

//   //take userId and socketId from user
//   socket.on("addUser", (userId) => {
//     addUser(userId, socket.id);
//     io.emit("getUsers", users);
//   });

//   //send and get message
//   socket.on("sendMessage", ({ senderId, receiverId, text }) => {
//     const user = getUser(receiverId);
//     io.to(user.socketId).emit("getMessage", {
//       senderId,
//       text,
//     });
//   });

//   //when disconnect
//   socket.on("disconnect", () => {
//     console.log("a user disconnected!");
//     removeUser(socket.id);
//     io.emit("getUsers", users);
//   });
// });
