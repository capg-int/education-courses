const express = require('express');
var cookieParser = require('cookie-parser');

const authRouter = require('./routes/auth');
const indexRouter = require("./routes");
const utilityRouter = require('./routes/utils');
const courseRouter = require("./routes/course");

const app = express();
app.use(express.json());
app.use(cookieParser());

/* Routes */
app.use('/auth', authRouter);
app.use('/api', indexRouter);
app.use('/api/utils', utilityRouter);
app.use("/api/courses", courseRouter);

module.exports = app;
