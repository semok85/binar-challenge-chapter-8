const dashRouter = require("express").Router();
const isAdmin = require("../middlewares/isAdmin");
const {
  dashboard,
  delPlayer,
  logout,
  editPlayer,
} = require("../controllers/dash.controller");

dashRouter.get("/", isAdmin, dashboard);
dashRouter.get("/delete/players/:id", delPlayer);
dashRouter.post("/edit/players/:id", editPlayer);
dashRouter.get("/logout", logout);

module.exports = dashRouter;
