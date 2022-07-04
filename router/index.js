const router = require('express').Router()
const setDefault = require("../middlewares/setDefault");
const setLayout = require("../middlewares/setLayout");
const controller = require('../controllers')

router.use(setDefault);
router.get('/', controller.home);

const dashboard = require("./dashboard");
router.use("/dashboard", dashboard);

const auth = require("./auth");
router.use("/auth", auth);

router.use(setLayout("default"));
router.use(controller.notFound);
router.use(controller.exception);

module.exports = router;