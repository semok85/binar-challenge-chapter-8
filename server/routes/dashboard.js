const dashRouter = require("express").Router();
const { dashboard, delPlayer } = require("../controllers/dash.controller");

dashRouter.get("/", dashboard);
dashRouter.post("/delete/players/:id", delPlayer);

module.exports = dashRouter;
