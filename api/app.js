const express = require("express");
var cookieParser = require("cookie-parser");

const db = require("./db");
const authRouter = require("./routes/auth");
const homeRouter = require("./routes");
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const coursesRouter = require("./routes/courses");
const etcRouter = require('./routes/etc');
const authGuard = require("./controllers/auth").validateToken;

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

app.use('/api/*', authGuard);

/* Routes */
app.use('/auth', authRouter);
app.use('/api', homeRouter);
app.use('/api/about', aboutRouter);
app.use('/api/contact', contactRouter);
app.use("/api/courses", coursesRouter);
app.use('/api/etc', etcRouter);

module.exports = app;
