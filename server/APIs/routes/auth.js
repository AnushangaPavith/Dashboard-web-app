// imports router
const router = require("express").Router();
// imports user.controller
const userController = require("../controllers/user.controller");


// resisters a new user
router.post("/register", userController.register);

// logs in a user
router.post("/login", userController.login);

// exports the router
module.exports = router;