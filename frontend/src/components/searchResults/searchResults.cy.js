import SearchResults from "./searchResults";
import mockSearchResults from "./mockSearchResults";

describe("SearchResults", () => {
  beforeEach(() => {
    cy.mount(
      <SearchResults animalSearch={mockSearchResults} renderSearch={true} />
    );
  });

  it("Renders component with name of animal", () => {
    cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
      "contain.text",
      "American Robin"
    );
  });

  it("Renders component with name of two animal options", () => {
    cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
      "contain.text",
      "American Robin"
    );
    cy.get('[data-cy="animalNameResultEuropean Robin"]').should(
      "contain.text",
      "European Robin"
    );
  });

  it("Renders component with name of three animal options", () => {
    cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
      "contain.text",
      "American Robin"
    );
    cy.get('[data-cy="animalNameResultEuropean Robin"]').should(
      "contain.text",
      "European Robin"
    );
    cy.get('[data-cy="animalNameResultRobin"]').should("contain.text", "Robin");
  });

  it("Renders component with locations of animals", () => {
    cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
      "contain.text",
      "Central-America",
      "Europe",
      "North-America"
    );
    cy.get('[data-cy="animalNameResultEuropean Robin"]').should(
      "contain.text",
      "Africa",
      "Asia",
      "Eurasia",
      "Europe"
    );
    cy.get('[data-cy="animalNameResultRobin"]').should(
      "contain.text",
      "Central-America",
      "Europe",
      "North-America",
      "Africa",
      "Asia",
      "Eurasia",
      "Europe"
    );
  });

  it("Renders component with prey of animals", () => {
    cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
      "contain.text",
      "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
    );
    cy.get('[data-cy="animalNameResultEuropean Robin"]').should(
      "contain.text",
      "Insects, spiders and worms"
    );
    cy.get('[data-cy="animalNameResultRobin"]').should(
      "contain.text",
      "Worms, Insects, Fruit, Berries"
    );
  });
});
