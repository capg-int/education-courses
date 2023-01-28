const config = require("../config");
const Intros = require("../models/intros");

const get = (req, res, next) => {
    const { referer } = req.query;

    Intros
        .find({ referer })
        .exec()
        .then(docs => {
            res.locals.data = docs;
            next();
        }).catch(() => {
            res.locals.status = 400;
            res.locals.message = JSON.stringify(error);
            next();
        });
};

const set = (req, res, next) => {
    const {
        referer
    } = req.body;

    const {
        db: {
            intro: {
                whitlist: whitelistedPages
            }
        }
    } = config;

    if (whitelistedPages.includes(referer)) {
        Intros.
            findOneAndReplace({
                referer
            }, req.body, {
                upsert: true
            })
            .exec()
            .then(() => {
                res.locals.data = req.body;
                next();
            })
            .catch((error) => {
                res.locals.status = 400;
                res.locals.message = JSON.stringify(error);
                next();
            });

    } else {
        res.locals.status = 400;
        res.locals.message = `referer '${referer}' is not whitelisted!`;
        next();
    }
};

module.exports = {
    get,
    set
};
