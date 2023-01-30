const router = require("express").Router();

const responseHandler = require("../middlewares/responseHandler");

router.post(
  "/generateToken",
  (req, res, next) => {
    res.locals.data = {
      accessToken:
        "o923rb23v63brcnl2nqbenavdnvbhmhog2364f2b3cr2jbav23rkb2nrt8238rv2b3rto9lrnaynj3bs3kr723otkabgebutwi4btgr2b3rg",
    };
    next();
  },
  responseHandler
);

router.post(
  "/validateToken",
  (req, res, next) => {
    // res.locals.status = 400;
    res.locals.data = {
      userId: "iasyhda8ika",
    };
    next();
  },
  responseHandler
);

module.exports = router;
