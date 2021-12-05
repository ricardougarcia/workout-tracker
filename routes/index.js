const routes = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

routes.use("/api", apiRoutes);
routes.use("/", htmlRoutes);

module.exports = routes;
