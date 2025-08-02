describe("about", () => {
  it("renders the about page", () => {
    cy.visit("/about");
    cy.get("h3").should("contain", "Acerca de");
  });
});
