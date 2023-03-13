import Animal from "./animal";
import mockSearchResults from "../searchResults/mockSearchResults";

describe("Animal", () => {
  it("Renders component with Animal name, location and prey", () => {
    cy.mount(
      <Animal
        animal={mockSearchResults[0]}
        index={0}
        food={false}
        parentComponent={"Result"}
      />
    );

    cy.get('[data-cy="animalResultAmerican Robin"]').should(
      "contain.text",
      "American Robin",
      "Where do they live?",
      "Central-America",
      "Europe",
      "North-America",
      "What do they eat?",
      "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
    );
  });
  it("Renders component with Animal name, location and main_prey", () => {
    cy.mount(
      <Animal
        animal={mockSearchResults[2]}
        index={2}
        food={false}
        parentComponent={"Result"}
      />
    );

    cy.get('[data-cy="animalResultRobin"]').should(
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
  it("Renders component with save button", () => {
    cy.mount(
      <Animal
        animal={mockSearchResults[0]}
        index={0}
        food={false}
        parentComponent={"Result"}
      />
    );

    cy.get('[data-cy="saveButton"]')
      .invoke("attr", "type")
      .should("eq", "submit");
  });

  it("Creates a POST request to '/animalSightings'", (done) => {
    cy.mount(
      <Animal
        animal={mockSearchResults[0]}
        index={0}
        food={false}
        parentComponent={"Result"}
      />
    );

    cy.intercept("POST", "/animalSightings", { message: "SAVED" }).as(
      "saveAnimal"
    );

    cy.get('[data-cy="saveButton"]').click();

    cy.wait("@saveAnimal").then((interception) => {
      expect(interception.response.body.message).to.eq("SAVED");
    });
    done();
  });

  it("Does not render component with save button when parentComponent is Log", () => {
    cy.mount(
      <Animal
        animal={mockSearchResults[0]}
        index={0}
        food={
          "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
        }
        parentComponent={"Log"}
      />
    );

    cy.get('[data-cy="saveButton"]').should("not.exist");
  });

  it("Renders component with Animal name, location and food when parentComponent is Log", () => {
    cy.mount(
      <Animal
        animal={mockSearchResults[0]}
        index={0}
        food={
          "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
        }
        parentComponent={"Log"}
      />
    );

    cy.get('[data-cy="animalLogAmerican Robin"]').should(
      "contain.text",
      "American Robin",
      "Where do they live?",
      "Central-America",
      "Europe",
      "North-America",
      "What do they eat?",
      "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
    );
  });
});
