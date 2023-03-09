import mockSearchResults from "../../src/components/searchResults/mockSearchResults";

describe("", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8080/animals?name=Robin", (req) => {
      req.reply({
        statusCode: 200,
        body: mockSearchResults,
      });
    }).as("getAnimals");
  });

  it("user sucessfully completes a search and renders one search result on the page", () => {
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
});
