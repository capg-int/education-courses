const jwt = require('jsonwebtoken');

const config = require('../config');

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

module.exports = {
    createToken,
    validateToken
};
