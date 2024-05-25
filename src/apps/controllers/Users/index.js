const usuarios = require("../../../users");
const { v4 } = require("uuid");

function allUsers(req, res) {
  return res.status(202).json(usuarios);
}

function sendUser(req, res) {
  const { name, phone } = req.body;

  const newUser = {
    id: v4(),
    name,
    phone,
  };

  usuarios.push(newUser);

  req.io.emit("GET:USERS", newUser);

  return res.status(201).json(usuarios);
}

module.exports = {
  allUsers,
  sendUser,
};
