const workout = require("../model/Workout");

class workoutController {
  static post = async (req, res) => {
    try {
      const Workout = await new workout({
        ...req.body,
      });
      const result = await Workout.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };
  static get = async (req, res) => {
    try {
      const result = await workout.find({});
      if (!result) {
        throw new Error("No data");
      }
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };
  static getOne = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await workout.findOne({ _id: Id });
      if (!result) {
        throw Error;
      }
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        msg: "Invalid ID",
      });
    }
  };
}

module.exports = workoutController;
