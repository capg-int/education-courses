const config = require("../config");
const Etc = require("../models/etc");

const get = (req, res, next) => {
    const { referer } = req.query;

    Etc
        .aggregate([{
            $match: {
                referer
            }
        },
        {
            $project: {
                _id: 0,
                data: 1
            }
        }])
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
            etc: {
                whitlist: whitelistedDocs
            }
        }
    } = config;

    if (whitelistedDocs.includes(referer)) {
        Etc.
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
