const express = require("express");
var cookieParser = require("cookie-parser");

const db = require("./db");
const authRouter = require("./routes/auth");
const homeRouter = require("./routes");
const aboutRouter = require("./routes/about");
const reviewerController = require("./routes/reviewer");
const contactRouter = require("./routes/contact");
const courseController = require("./routes/course.controller");
const authorController = require("./routes/author.controller");
const etcRouter = require("./routes/etc");
const authCtrl = require("./controllers/auth");

const app = express();
app.use(express.json());
app.use(cookieParser());

db.connect()
  .then(() => {
    console.log("DB connection established...");
  })
  .catch((error) => {
    const errStr = JSON.stringify(error);
    console.log("Error connecting to DB: ");
    console.log(errStr);
  });

app.use("/api/*", authCtrl.validateToken);

/* Routes */
app.use("/auth", authRouter);
app.use("/api", homeRouter);
app.use("/api/about", aboutRouter);
app.use("/api/reviewers", reviewerController);
app.use("/api/contact", contactRouter);
app.use("/api/courses", courseController);
app.use("/api/authors", authorController);
app.use("/api/etc", etcRouter);

module.exports = app;
