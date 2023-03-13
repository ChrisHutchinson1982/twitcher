import AnimalFacts from "./animalFacts";
import mockSearchResults from "../searchResults/mockSearchResults";

describe("AnimalFacts", () => {
  it("Renders component with Animal name, location and prey", () => {
    cy.mount(
      <AnimalFacts
        locations={mockSearchResults[0].locations}
        food={mockSearchResults[0].characteristics.prey}
      />
    );

    cy.get('[data-cy="animalFacts"]').should(
      "contain.text",
      "Where do they live?",
      "Central-America",
      "Europe",
      "North-America",
      "What do they eat?",
      "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
    );
  });
});
