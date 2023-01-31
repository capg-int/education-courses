const router = require('express').Router();

const responseHandler = require('../middlewares/responseHandler');
const aboutCtrl = require("../controllers/about");
const aboutReview = require("../mock/about-review.json")

router.get('/content', aboutCtrl.get, responseHandler);

router.get('/reviews', (req, res, next) => {
    res.locals.data = aboutReview;
    next();
}, responseHandler);

router.post("/content", aboutCtrl.set, responseHandler);
module.exports = router;
