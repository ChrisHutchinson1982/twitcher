const express = require("express");
const router = express.Router();
const AnimalsRouter = require("../controllers/animals");

router.get("/", AnimalsRouter.GetAnimal);

module.exports = router;
