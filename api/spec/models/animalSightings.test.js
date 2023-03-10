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

  // it("can save a trip to the database", (done) => {
  //   trip.save((err) => {
  //     expect(err).toBeNull();

  //     Trip.find((err, trips) => {
  //       expect(err).toBeNull();
  //       expect(trips[0].to).toEqual("Berlin, Germany");
  //       expect(trips[0].createdAt).not.toEqual(undefined);
  //       done();
  //     });
  //   });
  // });
});
