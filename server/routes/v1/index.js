const playerRouter = require("./player.routes");
const authRouter = require("./auth.routes");
const v1 = require("express").Router();

v1.use("/docs", require("./swagger-ui"));
v1.get("/", (_, res) => {
  res.send("from v1");
});

v1.use("/players", playerRouter);
v1.use("/login", authRouter);

module.exports = v1;
