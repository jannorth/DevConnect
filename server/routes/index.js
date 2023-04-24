const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.route("/api").get((req, res) => res.send("Welcome to DevConnect App!"));

module.exports = router;
