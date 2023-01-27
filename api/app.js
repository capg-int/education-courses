const express = require('express');
var cookieParser = require('cookie-parser');

const db = require("./db");
const authRouter = require('./routes/auth');
const indexRouter = require("./routes");
const utilityRouter = require('./routes/utils');
<<<<<<< HEAD
const contactUsRouter = require('./routes/contactUs')

=======
const aboutRouter = require('./routes/about');
const courseRouter = require("./routes/course");
>>>>>>> b9fd2c9be3e4def69088a77a148cbcb28b89a962

const app = express();
app.use(express.json());
app.use(cookieParser());

// db
//     .connect()
//     .then(() => {
//         console.log("DB connection established...")
//     })
//     .catch(error => {
//         const errStr = JSON.stringify(error);
//         console.log("Error connecting to DB: ");
//         console.log(errStr);
//     });

/* Routes */
app.use('/auth', authRouter);
app.use('/api', indexRouter);
app.use('/api/utils', utilityRouter);
<<<<<<< HEAD
app.use('/api/contactUs',contactUsRouter);
=======
app.use('/api/about', aboutRouter);

app.use("/api/courses", courseRouter);
>>>>>>> b9fd2c9be3e4def69088a77a148cbcb28b89a962

module.exports = app;
