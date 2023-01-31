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

router.post("/register", (req, res, next) => {
  const data = req.body;
  res.locals.data = {
    accessToken: authCtrl.createToken(data)
  };
  next();
}, responseHandler);

router.post("/forgotPassword", (req, res, next) => {
  const {
    email
  } = req.body;

  console.log("Email: ", email);

  res.locals.data = {
    message: "Password reset link has been successfully sent to email address you provided!"
  };

  next();
}, responseHandler);

module.exports = router;
