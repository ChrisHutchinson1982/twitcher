import SearchResults from "./searchResults";

describe("SearchResults", () => {
  beforeEach(() => {
    cy.mount(
      <SearchResults
        animalSearch={[
          {
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
          },
          {
            name: "European Robin",
            taxonomy: {
              kingdom: "Animalia",
              phylum: "Chordata",
              class: "Aves",
              order: "Passeriformes",
              family: "Muscicapidae",
              genus: "Erithacus",
              scientific_name: "Erithacus rubecula",
            },
            locations: ["Africa", "Asia", "Eurasia", "Europe"],
            characteristics: {
              prey: "Insects, spiders and worms",
              biggest_threat: "Hunting on the continent",
              most_distinctive_feature: "Its red/orange breast",
              "other_name(s)":
                "Robin, redbreast, English robin, ruddock, robinet, chat",
              wingspan: "7.9 to 8.7 inches",
              incubation_period: "13 days",
              litter_size: "Five to six chicks",
              habitat: "Gardens, farms, woods, heathland",
              predators: "Humans, cats, dogs, birds of prey, snakes, rodents",
              diet: "Omnivore",
              type: "Bird",
              common_name: "European Robin",
              location: "Europe, western Russia, northern Africa, Middle East",
              nesting_location:
                "Anywhere that provides shelter, including nest boxes, flower pots, crevices and unused machinery",
              age_of_molting: "14 days",
              migratory: "1",
              color: "BrownGreyWhiteOrange",
              skin_type: "Feathers",
              top_speed: "35 mph",
              lifespan: "13 months but can live much longer",
              weight: "0.56 to 0.78 ounces",
              length: "4.9 to 5.5 inches",
            },
          },
          {
            name: "Robin",
            taxonomy: {
              kingdom: "Animalia",
              phylum: "Chordata",
              class: "Aves",
              order: "Passeriformes",
              family: "Muscicapidae",
            },
            locations: [
              "Africa",
              "Asia",
              "Central-America",
              "Eurasia",
              "Europe",
              "North-America",
              "Oceania",
            ],
            characteristics: {
              main_prey: "Worms, Insects, Fruit, Berries",
              distinctive_feature:
                "Small body size and bright red chest of males",
              wingspan: "Up to 16 inches",
              incubation_period: "Two weeks",
              habitat: "Woodland, farmland and hedgerows",
              predators: "Cats, Dogs, Raccoon, Foxes",
              diet: "Omnivore",
              lifestyle: "Solitary",
              favorite_food: "Worms",
              type: "Bird",
              average_clutch_size: "4",
              slogan: "There are more than 45 species in Australia alone!",
              nesting_location: "Trees or shrubs",
              age_of_molting: "Two weeks",
              migratory: "1",
              color: "BrownWhiteOrange",
              skin_type: "Feathers",
              top_speed: "18 mph",
              lifespan: "1 - 3 years",
              weight: "16g - 22g (0.5oz - 0.7oz)",
              length: "12.5cm - 14cm (5in - 5.5in)",
            },
          },
        ]}
        renderSearch={true}
      />
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
});
