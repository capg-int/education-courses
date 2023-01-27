const router = require('express').Router();

const responseHandler = require('../middlewares/responseHandler');


router.get('/intro', (req, res, next) => {
    res.locals.data = {
        "title": "Contact Us",
        "description": "Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium",
    }
    next();
}, responseHandler);

router.get('/information', (req, res, next) => {
    res.locals.data = {
         "location" : "Banglore",
         "Email"    :"info@example",
         "call " : "+1 55895548855"
    }
    next();
}, responseHandler);

router.post('/submit', (req, res, next) => {
    res.locals.data = req.body;
    next();
}, responseHandler);

module.exports = router;
