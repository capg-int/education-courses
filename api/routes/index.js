const router = require("express").Router();

const responseHandler = require('../middlewares/responseHandler');
const homeIntro = require("../mock/landing-intro.json");

router.get("/intro", (req, res, next) => {
    res.locals.data = homeIntro;
    next();
}, responseHandler);

module.exports = router;
