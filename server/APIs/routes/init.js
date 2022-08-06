const router = require("express").Router();

// imports init.controller
const initController = require("../controllers/init.controller");

// initializes new run
router.post("/", initController.init);

module.exports = router;