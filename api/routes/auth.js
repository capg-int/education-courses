const router = require("express").Router();

const authCtrl = require("../controllers/auth");
const responseHandler = require("../middlewares/responseHandler");

router.post("/register", authCtrl.register, (req, res, next) => {
  const {
    user: {
      _id: userId
    }
  } = res.locals;

  res.locals.data = {
    accessToken: authCtrl.createToken({ userId })
  };

  next();
}, responseHandler);

router.post("/login", authCtrl.login, (req, res, next) => {
  const {
    user: {
      _id: userId
    }
  } = res.locals;

  res.locals.data = {
    accessToken: authCtrl.createToken({ userId })
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
