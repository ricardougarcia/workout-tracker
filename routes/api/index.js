const routes = require("express").Router();
const { Workout } = require("../../models");

routes.get("/workouts", async (req, res) => {
  try {
    const workoutDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    console.log(workoutDuration);
    res.json(workoutDuration);
  } catch (err) {
    console.log(err);
  }
});

routes.get("/workouts/range", async (req, res) => {
  try {
    const workoutDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7);
    res.json(workoutDuration);
  } catch (err) {
    console.log(err);
  }
});

routes.post("/workouts", async (req, res) => {
  try {
    const newWorkout = await Workout.create({});
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
  }
});

routes.put("/workouts/:id", async (req, res) => {
  try {
    const workoutUpdate = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true }
    );
    res.json(workoutUpdate);
  } catch (err) {
    console.log(err);
  }
});

routes.delete("/workouts", (req, res) => {
  res.send("hello its workouts");
});

module.exports = routes;
