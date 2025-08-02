describe("contact", () => {
  it("renders the contact page", () => {
    cy.visit("/contact");
    cy.get("h3").should("contain", "Contacto");
  });
});
