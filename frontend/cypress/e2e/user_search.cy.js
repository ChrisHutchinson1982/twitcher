import mockSearchResults from "../../src/components/searchResults/mockSearchResults";

describe("User animal search", () => {
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

  it("user sucessfully completes a search and renders all search results with animal name on the page", () => {
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
});
