const authCtrl = require("../controllers/auth");
const responseHandler = require("./responseHandler");

module.exports = (req, res, next) => {
    const { authorization = "" } = req.headers;

    const [bearerLabel, token] = authorization.split(" ");
    if (token) {
        try {
            const data = authCtrl.validateToken(token);
            res.locals.auth = data;
            return next();
        } catch(e) {
            console.log("Decryption error: ");
            console.log(JSON.stringify(e));
        }
    }

    res.locals.status = 401;
    res.locals.message = 'Unauthorized user!';
    responseHandler(req, res, next);
};
