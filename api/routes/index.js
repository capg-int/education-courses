const router = require("express").Router();

const introCtrl = require("../controllers/intro");
const responseHandler = require('../middlewares/responseHandler');

router.get("/intro", introCtrl.get, responseHandler);

router.post("/intro", introCtrl.set, responseHandler);

module.exports = router;
