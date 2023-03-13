import SightingsLog from "./sightingsLog";

describe("SightingsLog", () => {
  let setSightingsMock;

  beforeEach(() => {
    setSightingsMock = cy.stub();

    cy.intercept("GET", "/animalSightings").as("getSightings");

    cy.mount(
      <SightingsLog
        sightings={[
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
        ]}
        setSightings={setSightingsMock}
      />
    );
  });

  it("Calls the /animalSightings endpoint and renders lists of all names of the sightings", () => {
    cy.wait("@getSightings").then(() => {
      cy.get('[data-cy="sightingsLog"]')
        .should("contain.text", "American Robin")
        .and("contain.text", "Bengal Tiger");
    });
  });

  it("Calls the /animalSightings endpoint and renders lists of all names and facts of the sightings", () => {
    cy.wait("@getSightings").then(() => {
      cy.get('[data-cy="animalLogAmerican Robin"]').should(
        "contain.text",
        "American Robin",
        "Where do they live?",
        "Central-America",
        "Europe",
        "North-America",
        "What do they eat?",
        "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
      );
      cy.get('[data-cy="animalLogBengal Tiger"]').should(
        "contain.text",
        "Bengal Tiger",
        "Where do they live?",
        "Asia",
        "What do they eat?",
        "Deer, Cattle, Wild Boar"
      );
    });
  });

  it("Calls the /animalSightings endpoint and renders lists of sightings but does not show saveButton", () => {
    cy.wait("@getSightings").then(() => {
      cy.get('[data-cy="saveButton"]').should("not.exist");
    });
  });

  it("Component is rendered with tag line", () => {
    cy.get('[data-cy="sightingsLog"]').should("contain.text", "Twitching Log");
  });
});
