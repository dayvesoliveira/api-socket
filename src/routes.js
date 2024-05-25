const { Router } = require("express");

const UserController = require("./apps/controllers/Users");
const routes = Router();

routes.get("/health", (req, res) => res.status(200).json("Health is ok."));

routes.get("/users", UserController.allUsers);
routes.post("/users", UserController.sendUser);

module.exports = routes;
