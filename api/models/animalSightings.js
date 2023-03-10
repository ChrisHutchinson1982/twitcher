const mongoose = require("mongoose");

const AnimalSightingSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    locations: { type: Array, required: false },
    food: { type: String, required: false },
  },
  { timestamps: true }
);

const AnimalSighting = mongoose.model("AnimalSighting", AnimalSightingSchema);

module.exports = AnimalSighting;
