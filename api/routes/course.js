const router = require("express").Router();;

const responseHandler = require("../middlewares/responseHandler");
const aboutInto = require("../mock/about-intro.json");

router.get('/intro', (req, res, next) => {
  res.locals.data = aboutInto;
  next();
}, responseHandler);

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
