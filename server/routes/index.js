const apiRouter = require("express").Router();
const express = require("express");
const v1 = require("./v1");
const swaggerUi = require('./swagger-ui');
const router = express.Router();


apiRouter.use('/docs', swaggerUi);



apiRouter.get("/", (req, res) => {
  res.send("test");
});

apiRouter.use("/v1", v1);


module.exports = apiRouter;
