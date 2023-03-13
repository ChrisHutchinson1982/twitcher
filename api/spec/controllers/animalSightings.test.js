const AnimalSighting = require("../../models/animalSightings");
const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");

describe("/animalSightings", () => {
  let animalSighting1 = {
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
  };

  let animalSighting2 = {
    name: "Bengal Tiger",
    locations: ["Asia"],
    food: "Deer, Cattle, Wild Boar",
  };

  beforeEach(async () => {
    await AnimalSighting.deleteMany();
  });

  describe("POST", () => {
    test("responds with a status code 200", async () => {
      let response = await request(app)
        .post("/animalSightings")
        .send(animalSighting1);

      expect(response.status).toEqual(200);
    });

    test("a new animal sighting is created", async () => {
      await request(app).post("/animalSightings").send(animalSighting1);

      let animalSightings = await AnimalSighting.find();
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
      expect(animalSighting1.food).toEqual("Worms, Insects, Fruit, Berries");
    });
  });

  describe("GET", () => {
    test("returns every sighting in collection", async () => {
      let sighting1 = new AnimalSighting(animalSighting1);
      let sighting2 = new AnimalSighting(animalSighting2);

      await sighting1.save();
      await sighting2.save();

      let response = await request(app).get("/animalSightings");

      let sightings = response.body.map((sighting) => sighting.name);
      expect(sightings).toEqual(["Robin", "Bengal Tiger"]);
    });
  });
});
