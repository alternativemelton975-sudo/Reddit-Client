// Cypress support file for E2E tests
import './commands';

beforeEach(() => {
  // Visit the app before each test
  cy.visit('/');
});

// Ignore uncaught exceptions and network errors
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  if (
    err.message.includes('Non-Error promise rejection') ||
    err.message.includes('Cannot read')
  ) {
    return false;
  }
});
