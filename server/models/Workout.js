const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
  // add created at
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
