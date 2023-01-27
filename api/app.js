const express = require('express');
var cookieParser = require('cookie-parser');

const db = require("./db");
const authRouter = require('./routes/auth');
const indexRouter = require("./routes");
const utilityRouter = require('./routes/utils');
const aboutRouter = require('./routes/about');
const coursesRouter = require("./routes/course");

const app = express();
app.use(express.json());
app.use(cookieParser());

db
    .connect()
    .then(() => {
        console.log("DB connection established...")
    })
    .catch(error => {
        const errStr = JSON.stringify(error);
        console.log("Error connecting to DB: ");
        console.log(errStr);
    });

/* Routes */
app.use('/auth', authRouter);
app.use('/api', indexRouter);
app.use('/api/utils', utilityRouter);
app.use('/api/about', aboutRouter);
app.use("/api/courses", coursesRouter);

module.exports = app;
