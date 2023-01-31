const jwt = require('jsonwebtoken');

const config = require('../config');
const Users = require("../models/users");

const createToken = (data) => {
    const {
        tokenSecret: secret,
        tokenExpiresIn: expiresIn
    } = config.auth;

    return jwt.sign(data, secret, {
        expiresIn
    });
};

const validateToken = (token) => {
    const {
        tokenSecret: secret
    } = config.auth;

    return jwt.verify(token, secret);
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
            if(doc == null) {
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
