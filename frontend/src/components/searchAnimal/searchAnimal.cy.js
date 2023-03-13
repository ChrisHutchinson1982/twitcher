import SearchAnimal from "./searchAnimal";
import mockSearchResults from "../searchResults/mockSearchResults";

describe("SearchAnimal", () => {
  it("Rendres component with Animal name, location and prey", () => {
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
});
