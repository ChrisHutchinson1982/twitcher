const AnimalSighting = require("../../models/animalSightings");
const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");

describe("/animalSightings", () => {
  let animalSighting = {
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

  beforeEach(async () => {
    await AnimalSighting.deleteMany();
  });

  describe("POST", () => {
    test("responds with a status code 200", async () => {
      let response = await request(app)
        .post("/animalSightings")
        .send(animalSighting);

      expect(response.status).toEqual(200);
    });

    test("a new animal sighting is created", async () => {
      await request(app).post("/animalSightings").send(animalSighting);

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
      expect(animalSighting.food).toEqual("Worms, Insects, Fruit, Berries");
    });
  });
});
