import SearchAnimal from "./searchAnimal";

describe("SearchAnimal", () => {
  it("Rendres component with Animal name, location and prey", () => {
    cy.mount(
      <SearchAnimal
        animal={{
          name: "American Robin",
          taxonomy: {
            kingdom: "Animalia",
            phylum: "Chordata",
            class: "Aves",
            order: "Passeriformes",
            family: "Turdidae",
            genus: "Turdus Linnaeus",
            scientific_name: "Turdus migratorius",
          },
          locations: ["Central-America", "Europe", "North-America"],
          characteristics: {
            prey: "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails",
            name_of_young: "fledling",
            estimated_population_size: "310 million",
            biggest_threat: "pesticides",
            most_distinctive_feature: "orange chest",
            wingspan: "12-16in",
            incubation_period: "12-14 days",
            litter_size: "3-5",
            habitat: "woodland, shrubland, and residential",
            predators: "birds of prey, snakes, and cats",
            diet: "Omnivore",
            type: "bird",
            common_name: "American robin",
            number_of_species: "7",
            location: "North America",
            nesting_location: "tree forks and dense shrubs",
            migratory: "1",
            color: "GreyBlackWhiteOrange",
            skin_type: "Feathers",
            top_speed: "36 mph",
            lifespan: "2 years",
            weight: "75-77g",
            length: "8-11in",
          },
        }}
        index={0}
      />
    );

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
