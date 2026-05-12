// Custom Cypress commands for reusable test patterns

// Command to search for a post
Cypress.Commands.add('searchPost', (searchTerm) => {
  cy.get('[aria-label="Search posts"]').clear().type(searchTerm);
});

// Command to select a category
Cypress.Commands.add('selectCategory', (category) => {
  cy.get('.category-btn').contains(category).click();
});

// Command to sort posts
Cypress.Commands.add('sortBy', (sortOption) => {
  cy.get('#sort-select').select(sortOption);
});

// Command to open post detail modal
Cypress.Commands.add('openPostDetail', (postIndex = 0) => {
  cy.get('.post-card').eq(postIndex).click();
});

// Command to close modal
Cypress.Commands.add('closeModal', () => {
  cy.get('.modal-close').click();
});

// Command to reset filters
Cypress.Commands.add('resetFilters', () => {
  cy.get('.reset-btn').click();
});
