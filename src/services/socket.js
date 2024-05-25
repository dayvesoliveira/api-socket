// const io = require("socket.io");

// module.exports = (server) => io(server);

const io = require("socket.io");
const { Server } = require("socket.io");

const server = (httpServer) =>
  new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    },
  });

module.exports = { socket: io, socketServer: server };
