const router = require('express').Router();


// imports user.controller
const machineController = require("../controllers/machine.controller");

// list all machines
router.get("/", machineController.all);

// list machine details
router.get("/:machineID", machineController.show);

// Update machine details
router.post("/:machineID", machineController.update);

//Delete machine
router.delete("/:machineID",machineController.delete);

// exports the router
module.exports = router;