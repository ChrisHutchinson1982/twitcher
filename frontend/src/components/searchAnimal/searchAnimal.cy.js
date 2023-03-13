import SearchAnimal from "./searchAnimal";
import mockSearchResults from "../searchResults/mockSearchResults";

describe("SearchAnimal", () => {
  it("Renders component with Animal name, location and prey", () => {
    cy.mount(<SearchAnimal animal={mockSearchResults[0]} index={0} />);

    cy.get('[data-cy="animalNameResultAmerican Robin"]').should(
      "contain.text",
      "American Robin",
      "Central-America",
      "Europe",
      "North-America",
      "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
    );
  });
  it("Renders component with Animal name, location and main_prey", () => {
    cy.mount(<SearchAnimal animal={mockSearchResults[2]} index={2} />);

    cy.get('[data-cy="animalNameResultRobin"]').should(
      "contain.text",
      "Robin",
      "Central-America",
      "Europe",
      "North-America",
      "Africa",
      "Asia",
      "Eurasia",
      "Europe",
      "Worms, Insects, Fruit, Berries"
    );
  });
  it("Render component with save button", () => {
    cy.mount(<SearchAnimal animal={mockSearchResults[0]} index={0} />);

    cy.get('[data-cy="saveButton"]')
      .invoke("attr", "type")
      .should("eq", "submit");
  });
});
