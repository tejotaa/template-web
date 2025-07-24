describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Vite + React");
    cy.get("button").contains("count is 0").click();
    cy.get("button").contains("count is 1");
  });
});
