const WorkoutController = require("../controllers/WorkoutController");
const WorkoutRouter = require("express").Router();

WorkoutRouter.get("/", WorkoutController.get);
WorkoutRouter.post("/", WorkoutController.post);
WorkoutRouter.get("/:id", WorkoutController.getOne);

module.exports = WorkoutRouter;
