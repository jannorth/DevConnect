const router = require("express").Router();
const { getUser, createUser } = require("../../controllers/api");

// for getting getUser function
router.route("/users").get(getUser);

// for getting createUser function

router.route("/newUser").post(createUser);

module.exports = router;
