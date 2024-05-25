const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const http = require("http");
const { socketServer: socket } = require("./services/socket");

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

const server = http.createServer(app);

app.listen(33333, () => {
  console.log("Express server listening on port 33333");
});

app.request.io = socket(server);

module.exports = server;
