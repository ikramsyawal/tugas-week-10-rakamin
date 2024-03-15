const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.findAll);
router.get("/:id", movieController.findOne);
router.post("/", movieController.create);

module.exports = router;
