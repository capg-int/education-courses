const router = require('express').Router();

const responseHandler = require('../middlewares/responseHandler');

router.get('/information', (req, res, next) => {
    res.locals.data = {
        "location": "Banglore",
        "Email": "info@example",
        "call ": "+1 55895548855"
    }
    next();
}, responseHandler);

router.post('/submit', (req, res, next) => {
    res.locals.data = req.body;
    next();
}, responseHandler);

module.exports = router;
