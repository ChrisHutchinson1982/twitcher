import mockSearchResults from "../../src/components/searchResults/mockSearchResults";

describe("User search", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8080/animals?name=Robin", (req) => {
      req.reply({
        statusCode: 200,
        body: mockSearchResults,
      });
    }).as("getAnimals");
  });

  it("user sucessfully completes a search and renders one search result with animal name on the page", () => {
    cy.visit("/");

    cy.get('[data-cy="animalName"]').type("Robin");
    cy.get('[data-cy="searchSubmit"]').click();

    cy.wait("@getAnimals").then(() => {
      cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
        "contain.text",
        "American Robin"
      );
    });
  });

  it("user sucessfully completes a search and renders mutiple search results with animal name on the page", () => {
    cy.visit("/");

    cy.get('[data-cy="animalName"]').type("Robin");
    cy.get('[data-cy="searchSubmit"]').click();

    cy.wait("@getAnimals").then(() => {
      cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
        "contain.text",
        "American Robin"
      );
      cy.get('[data-cy="animalNameResultEuropean Robin"]').should(
        "contain.text",
        "European Robin"
      );
      cy.get('[data-cy="animalNameResultRobin"]').should(
        "contain.text",
        "Robin"
      );
    });
  });

  it("user sucessfully completes a search and renders mutiple search results with animal locations on the page", () => {
    cy.visit("/");

    cy.get('[data-cy="animalName"]').type("Robin");
    cy.get('[data-cy="searchSubmit"]').click();

    cy.wait("@getAnimals").then(() => {
      cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
        "contain.text",
        "Where do they live?",
        "Central-America",
        "Europe",
        "North-America"
      );
      cy.get('[data-cy="animalNameResultEuropean Robin"]').should(
        "contain.text",
        "Where do they live?",
        "Africa",
        "Asia",
        "Eurasia",
        "Europe"
      );
      cy.get('[data-cy="animalNameResultRobin"]').should(
        "contain.text",
        "Where do they live?",
        "Central-America",
        "Europe",
        "North-America",
        "Africa",
        "Asia",
        "Eurasia",
        "Europe"
      );
    });
  });

  it("user sucessfully completes a search and renders mutiple search results with animal foods on the page", () => {
    cy.visit("/");

    cy.get('[data-cy="animalName"]').type("Robin");
    cy.get('[data-cy="searchSubmit"]').click();

    cy.wait("@getAnimals").then(() => {
      cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
        "contain.text",
        "What do they eat?",
        "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
      );
      cy.get('[data-cy="animalNameResultEuropean Robin"]').should(
        "contain.text",
        "What do they eat?",
        "Insects, spiders and worms"
      );
      cy.get('[data-cy="animalNameResultRobin"]').should(
        "contain.text",
        "What do they eat?",
        "Worms, Insects, Fruit, Berries"
      );
    });
  });
});
