const LoginController = require("../controllers/LoginController");
const LoginRouter = require("express").Router();

LoginRouter.post("/", LoginController.post);
// LoginRouter.patch("/:id",LoginController.patch);
// LoginRouter.delete("/:id",LoginController.delete);

module.exports = LoginRouter;
