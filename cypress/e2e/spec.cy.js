describe('test register', () => {
  it('successful register', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get("#firstName").type("John", {force: true});
    cy.get("#lastName").type("Doe", {force: true});
    cy.get("#signup-email").type("john.doe@example.com", {force: true});
    cy.get("#signup-password").type("Motdepasse0", {force: true});
    cy.get('[data-qa="signup-submit-button"]').click({force: true});
  })
  it('failed register', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get("#firstName").type("John", {force: true});
    cy.get("#lastName").type("Doe", {force: true});
    cy.get("#signup-email").type("john.doeexample.com", {force: true});
    cy.get("#signup-password").type("oui", {force: true});
    cy.get('[data-qa="signup-submit-button"]').click({force: true});
  })
  it('successful login', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get("#signin-email").type("john.doe@example.com", {force: true});
    cy.get("#signin-password").type("Motdepasse0", {force: true});
    cy.get('[data-qa="signin-submit-button"]').click({force: true});
  })
})