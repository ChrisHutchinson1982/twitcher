import NavBar from "./navBar";

describe("NavBar", () => {
  it("Renders NavBar component with header", () => {
    cy.mount(<NavBar />);
    cy.get('[data-cy="siteHeader"]').should("contain.text", "Twitcher");
  });
});
