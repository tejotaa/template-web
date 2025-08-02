describe("dynamic Use cases", () => {
  it("change page", () => {
    cy.visit("/");
    cy.get("h3").should("contain", "Inicio");

    cy.get('button[role="tab"]').contains("Acerca de").click();
    cy.get("h3").should("contain", "Acerca de");

    cy.get('button[role="tab"]').contains("Contacto").click();
    cy.get("h3").should("contain", "Contacto");

    cy.get('button[role="tab"]').contains("Inicio").click();
    cy.get("h3").should("contain", "Inicio");
  });

  it("change language", () => {
    cy.visit("/");
    cy.get('span[data-testid="language-icon"]').should("exist").click();
    cy.get("h2").should("contain", "Selecciona un idioma");
    cy.get("span").contains("Español").should("exist");
    cy.get("span").contains("English").should("exist").click();

    cy.get('span[data-testid="language-icon"]').should("exist").click();
    cy.get("h2").should("contain", "Select a language");
    cy.get("span").contains("English").should("exist");
    cy.get("span").contains("Español").should("exist").click();
  });

  it("change theme", () => {
    cy.visit("/");
    cy.get('span[data-testid="theme-switch"]').should("exist").click();
    cy.get("h3")
      .should("contain", "Inicio")
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get('span[data-testid="theme-switch"]').should("exist").click();
    cy.get("h3")
      .should("contain", "Inicio")
      .should("have.css", "color", "rgba(0, 0, 0, 0.87)");
  });
});
