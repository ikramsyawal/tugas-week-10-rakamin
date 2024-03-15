const express = require("express");
const router = express.Router();
const movieRoute = require("./movieRoute");
const userRoute = require("./userRoute");

router.use("/api/movies", movieRoute);
router.use("/api/users", userRoute);

module.exports = router;
