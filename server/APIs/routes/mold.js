const router = require('express').Router();

// imports user.controller
const moldController = require("../controllers/mold.controller");

// resisters a new user
router.get("/", moldController.all);

// list mold details
router.get("/:moldID", moldController.show);

// Update machine details
router.post("/:moldID", moldController.update);

//Delete machine
router.delete("/:moldID",moldController.delete);

// exports the router
module.exports = router;