const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const apiRouter = require("./server/routes");
const dashRouter = require("./server/routes/dashboard");
const homeRouter = require("./server/routes/home");
const cookieParser = require("cookie-parser");
const errorHandler = require("./server/middlewares/errorHandler");
const flash = require("connect-flash");
const session = require("express-session");

const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "123456",
    cookie: { maxAge: 100 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(express.static(path.join(__dirname, "./server/public")));

//setting viewsfolder as template with ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./server/views"));

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
