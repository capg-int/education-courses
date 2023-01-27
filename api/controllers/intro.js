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
        body: intro
    } = req;

    Intros.
        findOneAndReplace({
            referer: intro.referer
        }, intro, {
            upsert: true
        })
        .exec()
        .then(() => {
            res.locals.data = intro;
            next();
        })
        .catch((error) => {
            res.locals.status = 400;
            res.locals.message = JSON.stringify(error);
            next();
        });
};

module.exports = {
    get,
    set
};
