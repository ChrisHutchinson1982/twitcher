const express = require("express");
const router = express.Router();
const AnimalSightingsController = require("../controllers/animalSightings");

router.get("/", AnimalSightingsController.Index);
router.post("/", AnimalSightingsController.Create);
router.delete("/", AnimalSightingsController.Delete);

module.exports = router;
