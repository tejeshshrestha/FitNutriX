const RegisterController = require("../controllers/RegisterController");
const RegisterRouter = require("express").Router();

RegisterRouter.get("/", RegisterController.get);
RegisterRouter.post("/", RegisterController.post);

module.exports = RegisterRouter;
