const jwt = require('jsonwebtoken');

const config = require('../config');
const responseHandler = require('../middlewares/responseHandler');
const Users = require("../models/users");

const createToken = (req, res, next) => {
    const {
        _id: userId
    } = res.locals.user;
    const {
        tokenSecret: secret,
        tokenExpiresIn: expiresIn
    } = config.auth;

    res.locals.data = {
        accessToken: jwt.sign({ userId }, secret, { expiresIn })
    };

    next();
};

const validateToken = (req, res, next) => {
    const {
        authorization = ""
    } = req.headers;

    const [bearerLabel, token] = authorization.split(" ");
    if (token) {
        try {
            const data = jwt.verify(token, config.auth.tokenSecret);
            res.locals.auth = data;
            return next();
        } catch (e) {
            console.log("Decryption error: ");
            console.log(JSON.stringify(e));
        }
    }

    res.locals.status = 401;
    res.locals.message = 'Unauthorized user!';
    responseHandler(req, res, next);
};

const register = (req, res, next) => {
    const {
        username,
        password,
    } = req.body;

    Users
        .create({
            username,
            password,
        })
        .then(doc => {
            res.locals.user = doc;
            next();
        })
        .catch((error) => {
            const response = {
                status: 400,
                message: JSON.stringify(error)
            };
            res.status(400).json(response).end();
        });
};

const login = (req, res, next) => {
    const {
        username,
        password,
    } = req.body;

    Users
        .findOne({
            username,
            password
        })
        .then(doc => {
            if (doc == null) {
                const response = {
                    status: 400,
                    message: JSON.stringify(error)
                };
                return res.status(400).json(response).end();
            }


            res.locals.user = doc;
            next();
        })
        .catch((error) => {
            const response = {
                status: 400,
                message: JSON.stringify(error)
            };
            res.status(400).json(response).end();
        });
};

module.exports = {
    createToken,
    validateToken,
    register,
    login
};
