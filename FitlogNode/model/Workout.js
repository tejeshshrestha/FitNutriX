const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  WorkoutDone: {
    type: String,
  },
  TotalSets: {
    type: String,
  },
  RepsPerSet: {
    type: String,
  },
  StartTime: {
    type: String,
  },
  EndTime: {
    type: String,
  },
});

const workout = mongoose.model("Workouts", workoutSchema);

module.exports = workout;
