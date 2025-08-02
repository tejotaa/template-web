describe("home", () => {
  it("renders the home page", () => {
    cy.visit("/");
    cy.get("h3").should("contain", "Inicio");
  });
});
