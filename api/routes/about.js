const router = require('express').Router();

const responseHandler = require('../middlewares/responseHandler');
const about = require("../mock/about-intro.json");
const aboutContent = require("../mock/about-content.json");
const aboutReview = require("../mock/about-review.json")

router.get('/intro', (req, res, next) => {
    res.locals.data = about;
    next();
}, responseHandler);

router.get('/content', (req, res, next) => {
    res.locals.data = aboutContent;
    next();
}, responseHandler);

router.get('/reviews', (req, res, next) => {
    res.locals.data = aboutReview;
    next();
}, responseHandler);

module.exports = router;