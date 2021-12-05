const routes = require("express").Router();

routes.get("/workouts", (req, res) => {
  res.send("hello its workouts");
});

module.exports = routes;
