const mongoose = require("mongoose");

require("../mongodb_helper");
const AnimalSighting = require("../../models/animalSightings");

describe("AnimalSighting Model", () => {
  let animalSighting;
  beforeEach(async () => {
    await AnimalSighting.deleteMany();

    animalSighting = new AnimalSighting({
      name: "Robin",
      locations: [
        "Africa",
        "Asia",
        "Central-America",
        "Eurasia",
        "Europe",
        "North-America",
        "Oceania",
      ],
      food: "Worms, Insects, Fruit, Berries",
    });
  });

  it("has all required fields", () => {
    expect(animalSighting.name).toEqual("Robin");
    expect(animalSighting.locations).toEqual([
      "Africa",
      "Asia",
      "Central-America",
      "Eurasia",
      "Europe",
      "North-America",
      "Oceania",
    ]);
    expect(animalSighting.food).toEqual("Worms, Insects, Fruit, Berries");
  });

  it("can save a animal sighting to the database", async () => {
    await animalSighting.save();
    const animalSightings = await AnimalSighting.find();

    expect(animalSightings[0].name).toEqual("Robin");
    expect(animalSightings[0].locations).toEqual([
      "Africa",
      "Asia",
      "Central-America",
      "Eurasia",
      "Europe",
      "North-America",
      "Oceania",
    ]);
    expect(animalSighting.food).toEqual("Worms, Insects, Fruit, Berries");
  });
});
