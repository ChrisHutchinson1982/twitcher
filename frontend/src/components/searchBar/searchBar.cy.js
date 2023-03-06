import SearchBar from "./searchBar";

describe("SearchBar", () => {
  beforeEach(() => {
    cy.mount(<SearchBar />);
  });

  it("has field to enter animal name and submit buttom", () => {
    cy.get('[data-cy="searchBarLabel"]').should(
      "contain.text",
      "What animal have you spotted?"
    );
    cy.get('[data-cy="animalName"]');
    cy.get('[data-cy="searchSubmit"]')
      .invoke("attr", "type")
      .should("eq", "submit");
  });

  it("user can type animal and click on submit button", () => {
    cy.intercept("GET", "/animals?name=cheetah").as("searchRequest");

    cy.get('[data-cy="animalName"]').type("cheetah");
    cy.get('[data-cy="searchSubmit"]').click();

    cy.wait("@searchRequest");
  });
});
