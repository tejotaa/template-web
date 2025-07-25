describe("template spec", () => {
  it("passes", () => {
    cy.visit("/about");
    cy.get("h1").should("contain", "About");
  });
});
