"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { responseCustome } = require("../../utils/index.js");
const socket_io_1 = require("socket.io");
exports.default = (http) => {
    const io = new socket_io_1.Server(http);
    io.on("connection", (socket) => {
        console.log(`A new Used Connected {socket.id}`);
        io.emit("user joined", {
            id: socket.id,
            audio: "/chat-leat",
        });
        socket.on("chat message", (msg) => {
            io.emit("chat message", {
                message: msg,
                audio: "notify",
            });
        });
        socket.on("user typing", function (id) {
            io.emit("user typing", id);
        });
        socket.on("stopped typing", function (id) {
            io.emit("stopped typing", id);
        });
        socket.on("disconnect", function () {
            socket.broadcast.emit("adios", {
                id: socket.id,
                audio: "/chat-leat",
            });
        });
    });
};
