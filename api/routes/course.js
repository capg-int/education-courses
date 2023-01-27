const express = require("express");
const router = express.Router();
const responseHandler = require("../middlewares/responseHandler");

router.get(
  "/",
  (req, res, next) => {
    res.locals.data = {
      courses: "Welcome to all courses",
    };
    next();
  },
  responseHandler
);

router.get(
  "/:id",
  (req, res, next) => {
    res.locals.data = {
      course: `Welcome to the course - ${req.params.id}`,
    };
    next();
  },
  responseHandler
);
module.exports = router;
