import SightingsLog from "./sightingsLog";

describe("SightingsLog", () => {
  beforeEach(() => {
    cy.intercept("GET", "/animalSightings", (req) => {
      req.reply({
        statusCode: 200,
        body: [
          {
            _id: "640f1f5232ae66537401f128",
            name: "American Robin",
            locations: ["Central-America", "Europe", "North-America"],
            food: "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails",
            createdAt: "2023-03-13T13:04:18.752Z",
            updatedAt: "2023-03-13T13:04:18.752Z",
            __v: 0,
          },
          {
            _id: "640f1fe8b5783404dafd2685",
            name: "Bengal Tiger",
            locations: ["Asia"],
            food: "Deer, Cattle, Wild Boar",
            createdAt: "2023-03-13T13:06:48.185Z",
            updatedAt: "2023-03-13T13:06:48.185Z",
            __v: 0,
          },
        ],
      });
    }).as("getSightings");

    cy.mount(<SightingsLog />);
  });

  it("Calls the /animalSightings endpoint and lists all names of the sightings", () => {
    cy.wait("@getSightings").then(() => {
      cy.get('[data-cy="sightingsLog"]')
        .should("contain.text", "American Robin")
        .and("contain.text", "Bengal Tiger");
    });
  });
});
