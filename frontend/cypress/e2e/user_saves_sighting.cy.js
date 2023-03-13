import mockSearchResults from "../../src/components/searchResults/mockSearchResults";

describe("User saves sightings", () => {
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
      cy.get('[data-cy="saveButton"]').first().click();
      cy.get('[data-cy="animalLogAmerican Robin"]').should(
        "contain.text",
        "American Robin"
      );
    });
  });
});
