const routes = require("express").Router();
const path = require("path");

routes.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

routes.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
});
routes.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
});

module.exports = routes;
