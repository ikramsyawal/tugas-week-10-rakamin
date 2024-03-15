const express = require("express");
const router = express.Router();
const movieRoute = require("./movieRoute");

router.use("/api/movies", movieRoute);

module.exports = router;
