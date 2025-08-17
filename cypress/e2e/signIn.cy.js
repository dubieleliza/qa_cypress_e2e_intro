/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('Sign In Flow', () => {
  const email = 'mate@mate.com';
  const password = 'Mate.mate';
  const username = 'Mate';

  it('should sign in via API and display username in header', () => {
    // logowanie przez API
    cy.request('POST', 'https://conduit.productionready.io/api/users/login', {
      user: { email, password }
    }).then((response) => {
      expect(response.status).to.eq(200); // upewniamy się, że API działa
      // zapisujemy token w localStorage
      window.localStorage.setItem('jwtToken', response.body.user.token);
    });

    // odwiedzamy stronę
    cy.visit('https://react-redux.realworld.io/#/');

    // sprawdzamy username w nagłówku
    cy.get('ul.navbar-nav', { timeout: 15000 })
      .contains(username)
      .should('be.visible');
  });
});
