/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Ignoruj błędy aplikacji, żeby test się nie wywalał
    Cypress.on('uncaught:exception', () => {
      return false;
    });

    // 1. Odwiedzenie strony logowania
    cy.visit('https://conduit.mate.academy/#/login');

    // 2. Wpisanie poprawnego emaila i hasła
    cy.get('input[type="email"]').type('mate@mate.com');
    cy.get('input[type="password"]').type('Mate.mate');

    // 3. Kliknięcie przycisku "Sign In"
    cy.get('button[type="submit"]').click();

    // 4. Sprawdzenie, czy nazwa użytkownika "mate" pojawiła się w headerze
    cy.get('nav').contains('mate').should('be.visible');
  });
});
