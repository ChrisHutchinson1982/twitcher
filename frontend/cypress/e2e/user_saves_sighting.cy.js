import mockSearchResults from "../mockSearchResults";

describe("User saves sightings", () => {
  beforeEach(() => {
    cy.intercept("GET", "/animals?name=Robin", (req) => {
      req.reply({
        statusCode: 200,
        body: mockSearchResults,
      });
    }).as("getAnimals");
  });

  it("user sucessfully completes a search, saves and animal appears in twitching log", () => {
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

  it("user sucessfully completes a search, saves and animal appears in twitching log when no prey details", () => {
    cy.visit("/");

    cy.get('[data-cy="animalName"]').type("Robin");
    cy.get('[data-cy="searchSubmit"]').click();

    cy.wait("@getAnimals").then(() => {
      cy.get('[data-cy="saveButton"]').last().click();
      cy.get('[data-cy="animalLogAustralian Cattle Dog"]').should(
        "contain.text",
        "Australian Cattle Dog"
      );
    });
  });
});
