const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const specs = require("../../config/swagger");

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs));

module.exports = router;
