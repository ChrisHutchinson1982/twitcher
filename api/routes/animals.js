const express = require("express");
const router = express.Router();
const AnimalsController = require("../controllers/animals");

router.get("/", AnimalsController.GetAnimal);

module.exports = router;
