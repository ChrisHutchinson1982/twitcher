const AnimalSighting = require("../models/animalSightings");

const AnimalSightingsController = {
  Index: async (req, res) => {
    try {
      const data = await AnimalSighting.find();
      if (data) {
        console.log(data);
        res.status(200).json(data);
      }
    } catch (err) {
      res.status(400).json({ error: error.message });
    }
  },

  Create: async (req, res) => {
    const { name, locations, food } = req.body;
    const animalSighting = new AnimalSighting({ name, locations, food });

    try {
      await animalSighting.save();
      res.status(200).json({ message: "SAVED" });
    } catch (err) {
      res.status(400).json({ error: error.message });
    }
  },

  Delete: async (req, res) => {
    try {
      await AnimalSighting.findOneAndDelete({ _id: req.get("animal_id") });
      res.status(200).json({ message: "DELETED" });
    } catch (err) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = AnimalSightingsController;
