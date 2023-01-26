const router = require('express').Router();

const responseHandler = require('../middlewares/responseHandler');
const navLinks = require("../mock/nav-links.json");

router.get('/navLinks', (req, res, next) => {
    res.locals.data = navLinks;
    next();
}, responseHandler);

module.exports = router;
