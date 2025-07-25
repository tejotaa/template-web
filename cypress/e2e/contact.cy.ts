describe("template spec", () => {
  it("passes", () => {
    cy.visit("/contact");
    cy.get("h1").should("contain", "CONTACT");
  });
});
