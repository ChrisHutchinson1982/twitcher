import SearchBar from "./searchBar";

describe("SearchBar", () => {
  it("has field to enter animal name and submit buttom", () => {
    cy.mount(<SearchBar />);
    cy.get('[data-cy="searchBarLabel"]').should(
      "contain.text",
      "What animal have you spotted?"
    );
    cy.get('[data-cy="animalName"]');
    cy.get('[data-cy="searchSubmit"]')
      .invoke("attr", "type")
      .should("eq", "submit");
  });
});
