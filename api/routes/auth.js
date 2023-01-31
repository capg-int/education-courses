const router = require("express").Router();

const authCtrl = require("../controllers/auth");
const authGuard = require("../middlewares/authGuard");
const responseHandler = require("../middlewares/responseHandler");

router.post("/login", (req, res, next) => {
  const data = req.body;
  res.locals.data = {
    accessToken: authCtrl.createToken(data)
  };
  next();
}, responseHandler);

router.post("/validateToken", authGuard, (req, res, next) => {
  res.locals.data = res.locals.auth;
  next();
}, responseHandler);

module.exports = router;
