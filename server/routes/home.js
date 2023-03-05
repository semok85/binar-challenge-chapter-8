const homeRouter = require("express").Router();
const {
  home,
  registerAdmin,
  loginAdmin,
} = require("../controllers/home.controller");
homeRouter.get("/", home);
homeRouter.post("/register", registerAdmin);
homeRouter.post("/login", loginAdmin);

module.exports = homeRouter;
