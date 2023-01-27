const router = require('express').Router();

const introCtrl = require("../controllers/intro");
const responseHandler = require('../middlewares/responseHandler');
const navLinks = require("../mock/nav-links.json");

router.get('/navLinks', (req, res, next) => {
    res.locals.data = navLinks;
    next();
}, responseHandler);

router.get("/intro", introCtrl.get, responseHandler);

router.post("/intro", introCtrl.set, responseHandler);

module.exports = router;
