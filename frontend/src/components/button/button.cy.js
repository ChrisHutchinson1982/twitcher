import Button from "./button";
import mockSearchResults from "../searchResults/mockSearchResults";

describe("Button", () => {
  let setSightingsMock;

  it("Renders delete button when parentComponent is Log", () => {
    cy.mount(
      <Button
        animal={mockSearchResults[0]}
        food={
          "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
        }
        parentComponent={"Log"}
        setSightings={setSightingsMock}
      />
    );

    cy.get('[data-cy="saveButton"]').should("not.exist");
    cy.get('[data-cy="deleteButton"]').should("exist");
  });

  it("Does not render delete button when parentComponent is Search", () => {
    cy.mount(
      <Button
        animal={mockSearchResults[0]}
        food={
          "earthworms, caterpillars, grasshoppers, beetle grubs, spiders, and snails"
        }
        parentComponent={"Search"}
        setSightings={setSightingsMock}
      />
    );

    cy.get('[data-cy="saveButton"]').should("exist");
    cy.get('[data-cy="deleteButton"]').should("not.exist");
  });
});
