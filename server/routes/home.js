const homeRouter = require("express").Router();
const homeController = require("../controllers/home.controller");

homeRouter.get("/", homeController);

module.exports = homeRouter;
