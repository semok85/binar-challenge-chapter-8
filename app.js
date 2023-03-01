const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const apiRouter = require("./server/routes");
const dashRouter = require("./server/routes/dashboard");
const homeRouter = require("./server/routes/home");
const errorHandler = require("./server/middlewares/errorHandler");
const PORT = process.env.PORT || 4000;

//setting viewsfolder as template with ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./server/views"));

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./server/public")));

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter);
app.use("/dashboard", dashRouter);
app.use(homeRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
