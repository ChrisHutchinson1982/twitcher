import mockSearchResults from "../mockSearchResults";

describe("User search", () => {
  beforeEach(() => {
    cy.intercept("GET", "/animals?name=Robin", (req) => {
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
      cy.get('[data-cy="animalSearchAmerican Robin"]').should(
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
      cy.get('[data-cy="animalSearchAmerican Robin"]').should(
        "contain.text",
        "American Robin"
      );
      cy.get('[data-cy="animalSearchEuropean Robin"]').should(
        "contain.text",
        "European Robin"
      );
      cy.get('[data-cy="animalSearchRobin"]').should("contain.text", "Robin");
    });
  });

  it("user sucessfully completes a search and renders mutiple search results with animal locations on the page", () => {
    cy.visit("/");

    cy.get('[data-cy="animalName"]').type("Robin");
    cy.get('[data-cy="searchSubmit"]').click();

    cy.wait("@getAnimals").then(() => {
      cy.get('[data-cy="animalSearchAmerican Robin"]').should(
        "contain.text",
        "Where do they live?",
        "Central-America",
        "Europe",
        "North-America"
      );
      cy.get('[data-cy="animalSearchEuropean Robin"]').should(
        "contain.text",
        "Where do they live?",
        "Africa",
        "Asia",
        "Eurasia",
        "Europe"
      );
      cy.get('[data-cy="animalSearchRobin"]').should(
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
      cy.get('[data-cy="animalSearchAmerican Robin"]').should(
        "contain.text",
        "What do they eat?",
        "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
      );
      cy.get('[data-cy="animalSearchEuropean Robin"]').should(
        "contain.text",
        "What do they eat?",
        "Insects, spiders and worms"
      );
      cy.get('[data-cy="animalSearchRobin"]').should(
        "contain.text",
        "What do they eat?",
        "Worms, Insects, Fruit, Berries"
      );
    });
  });

  it("user completes a search without search details and no search results are rendered on the page", () => {
    cy.visit("/");
    cy.get('[data-cy="searchSubmit"]').click();

    cy.get('[data-cy="animalSearchAmerican Robin"]').should("not.exist");
    cy.get('[data-cy="animalSearchEuropean Robin"]').should("not.exist");
    cy.get('[data-cy="animalSearchRobin"]').should("not.exist");
  });
});
