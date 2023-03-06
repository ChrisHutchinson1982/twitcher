const app = require("../../app");
const request = require("supertest");
require("jest-fetch-mock").enableMocks();

describe("/animals", () => {
  beforeEach(() => {
    fetch.resetMocks();

    fetch.mockResponse(
      JSON.stringify({
        name: "Cheetah",
        taxonomy: {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Mammalia",
          order: "Carnivora",
          family: "Felidae",
          genus: "Acinonyx",
          scientific_name: "Acinonyx jubatus",
        },
        locations: ["Africa", "Asia", "Eurasia"],
        characteristics: {
          prey: "Gazelle, Wildebeest, Hare",
          name_of_young: "Cub",
          group_behavior: "Solitary/Pairs",
          estimated_population_size: "8,500",
          biggest_threat: "Habitat loss",
          most_distinctive_feature:
            "Yellowish fur covered in small black spots",
          gestation_period: "90 days",
          habitat: "Open grassland",
          diet: "Carnivore",
          average_litter_size: "3",
          lifestyle: "Diurnal",
          common_name: "Cheetah",
          number_of_species: "5",
          location: "Asia and Africa",
          slogan: "The fastest land mammal in the world!",
          group: "Mammal",
          color: "BrownYellowBlackTan",
          skin_type: "Fur",
          top_speed: "70 mph",
          lifespan: "10 - 12 years",
          weight: "40kg - 65kg (88lbs - 140lbs)",
          height: "115cm - 136cm (45in - 53in)",
          age_of_sexual_maturity: "20 - 24 months",
          age_of_weaning: "3 months",
        },
      })
    );
  });

  test("response code is 200 when params name given", async () => {
    let response = await request(app).get("/animals?name=cheetah");
    expect(response.status).toEqual(200);
  });

  test("calls fetch and returns data from api", async () => {
    let response = await request(app).get("/animals?name=cheetah");

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("Cheetah");
  });
});
