// require express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// imolement dot env for env variables
require("dotenv").config();

const WorkoutModel = require("./models/Workout");

app.use(express.json());
app.use(cors());

// connect db
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

// listen at port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// get all workouts
app.get("/workouts", async (req, res) => {
  WorkoutModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.status(200).send({
      message: "Workouts fetched successfully",
      data: result,
    });
  });
});

// create a workout
app.post("/create", async (req, res) => {
  const title = req.body.title;
  const reps = req.body.reps;
  const load = req.body.load;
  const workout = new WorkoutModel({
    title: title,
    reps: reps,
    load: load,
  });
  try {
    await workout.save();
    res.status(201).json({
      message: "Workout created",
      workout,
    });
  } catch (error) {
    console.log(error);
  }
});

// uodate the title of a workout
app.patch("/update/:id", async (req, res) => {
  const newTitle = req.body.newTitle;
  const id = req.params.id;
  try {
    await WorkoutModel.findById(id, (err, updatedWorkout) => {
      updatedWorkout.title = newTitle;
      updatedWorkout.save();
      res.send(updatedWorkout);
    });
  } catch (error) {
    console.log(error);
  }
});
// delete a workout
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await WorkoutModel.findByIdAndRemove(id).exec();

  res.send("workout deleted");
});
