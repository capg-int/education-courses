const router = require("express").Router();

const introCtrl = require("../controllers/intro");
const etcCtrl = require("../controllers/etc");
const responseHandler = require('../middlewares/responseHandler');

router.get('/', etcCtrl.get, responseHandler);
router.post('/', etcCtrl.set, responseHandler);

router.get("/intro", introCtrl.get, responseHandler);
router.post("/intro", introCtrl.set, responseHandler);

module.exports = router;
