import SearchFacts from "./searchFacts";
import mockSearchResults from "../searchResults/mockSearchResults";

describe("SearchAnimal", () => {
  it("Renders component with Animal name, location and prey", () => {
    cy.mount(
      <SearchFacts
        locations={mockSearchResults[0].locations}
        food="earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
      />
    );

    cy.get('[data-cy="animalFacts"]').should(
      "contain.text",
      "Central-America",
      "Europe",
      "North-America",
      "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
    );
  });
  // it("Renders component with Animal name, location and main_prey", () => {
  //   cy.mount(<SearchAnimal animal={mockSearchResults[2]} index={2} />);

  //   cy.get('[data-cy="animalNameResultRobin"]').should(
  //     "contain.text",
  //     "Robin",
  //     "Central-America",
  //     "Europe",
  //     "North-America",
  //     "Africa",
  //     "Asia",
  //     "Eurasia",
  //     "Europe",
  //     "Worms, Insects, Fruit, Berries"
  //   );
  // });
});
