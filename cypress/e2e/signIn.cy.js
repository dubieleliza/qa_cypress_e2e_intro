/// <reference types='cypress' />

describe('Sign in page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.contains('Sign in')
      .click();

    cy.url().should('include', '/login');

    cy.get('[placeholder="Email"]')
      .type('mate@mate.com');
    cy.get('[placeholder="Password"]')
      .type('Mate.mate');

    cy.contains('[type="submit"]', 'Sign in')
      .click();

    cy.get('nav').contains('mate')
      .should('be.visible');
  });
});
