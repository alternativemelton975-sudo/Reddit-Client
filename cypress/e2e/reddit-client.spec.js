describe('Reddit Client - E2E Tests', () => {
  describe('Initial Load', () => {
    it('should load the app and display posts', () => {
      // Header should be visible
      cy.get('header.header').should('be.visible');
      cy.get('.logo-text').should('contain', 'Reddit Client');

      // Search bar should be visible
      cy.get('[aria-label="Search posts"]').should('be.visible');

      // Filter bar should be visible
      cy.get('.filter-bar').should('be.visible');

      // Posts should be displayed
      cy.get('.post-card').should('have.length.greaterThan', 0);
    });

    it('should display initial data on first visit', () => {
      cy.get('.post-grid').should('be.visible');
      cy.get('.post-card').first().should('be.visible');
      cy.get('.post-card-title').first().should('not.be.empty');
      cy.get('.post-card-image').first().should('be.visible');
    });

    it('should have all category buttons', () => {
      const categories = [
        'All',
        'Photography',
        'Pets',
        'Technology',
        'Food',
        'Writing',
        'Wellness',
        'Travel',
        'Hobbies',
      ];

      categories.forEach((category) => {
        cy.contains('.category-btn', category).should('be.visible');
      });
    });
  });

  describe('Search Functionality', () => {
    it('should filter posts by search term', () => {
      cy.searchPost('React');
      cy.get('.post-card').should('have.length.lessThan', 10);
    });

    it('should show empty state when no posts match search', () => {
      cy.searchPost('NonexistentPost12345');
      cy.get('.empty-state').should('be.visible');
      cy.get('.empty-state-title').should('contain', 'No posts found');
    });

    it('should clear search with clear button', () => {
      cy.searchPost('test');
      cy.get('.search-clear').should('be.visible').click();
      cy.get('[aria-label="Search posts"]').should('have.value', '');
    });

    it('should search by author name', () => {
      cy.searchPost('John');
      cy.get('.post-card').should('exist');
    });
  });

  describe('Category Filtering', () => {
    it('should filter posts by category', () => {
      cy.selectCategory('Photography');
      cy.get('.category-btn').contains('Photography').should('have.class', 'active');
      cy.get('.post-card').first().should('be.visible');
    });

    it('should filter by multiple categories sequentially', () => {
      cy.selectCategory('Technology');
      cy.get('.category-btn').contains('Technology').should('have.class', 'active');
      cy.selectCategory('Pets');
      cy.get('.category-btn').contains('Pets').should('have.class', 'active');
    });

    it('should return to all posts when selecting All', () => {
      cy.selectCategory('Photography');
      cy.selectCategory('All');
      cy.get('.category-btn').contains('All').should('have.class', 'active');
    });
  });

  describe('Sorting', () => {
    it('should sort by newest (default)', () => {
      cy.get('#sort-select').should('have.value', 'newest');
    });

    it('should sort by most upvoted', () => {
      cy.sortBy('score');
      cy.get('#sort-select').should('have.value', 'score');
    });

    it('should sort by most comments', () => {
      cy.sortBy('comments');
      cy.get('#sort-select').should('have.value', 'comments');
    });
  });

  describe('Detail Modal', () => {
    it('should open detail modal when clicking a post', () => {
      cy.openPostDetail(0);
      cy.get('[role="dialog"]').should('be.visible');
      cy.get('.modal-title').should('be.visible');
    });

    it('should display post details in modal', () => {
      cy.openPostDetail(0);
      cy.get('.modal-image').should('be.visible');
      cy.get('.modal-title').should('not.be.empty');
      cy.get('.modal-summary').should('be.visible');
      cy.get('.modal-meta').should('be.visible');
      cy.get('.modal-stats').should('be.visible');
    });

    it('should close modal with close button', () => {
      cy.openPostDetail(0);
      cy.get('[role="dialog"]').should('be.visible');
      cy.closeModal();
      cy.get('[role="dialog"]').should('not.exist');
    });

    it('should close modal by clicking backdrop', () => {
      cy.openPostDetail(0);
      cy.get('.modal-backdrop').click({ force: true });
      cy.get('[role="dialog"]').should('not.exist');
    });

    it('should close modal with Escape key', () => {
      cy.openPostDetail(0);
      cy.get('[role="dialog"]').should('be.visible');
      cy.get('body').type('{esc}');
      cy.get('[role="dialog"]').should('not.exist');
    });

    it('should display stats in modal', () => {
      cy.openPostDetail(0);
      cy.get('.stat-icon').should('have.length', 2);
      cy.get('.stat-number').should('have.length', 2);
    });
  });

  describe('Reset Filters', () => {
    it('should show reset button when filters are active', () => {
      cy.searchPost('test');
      cy.get('.reset-btn').should('be.visible');
    });

    it('should reset all filters', () => {
      cy.searchPost('test');
      cy.selectCategory('Photography');
      cy.resetFilters();

      cy.get('[aria-label="Search posts"]').should('have.value', '');
      cy.get('.category-btn').contains('All').should('have.class', 'active');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile', () => {
      cy.viewport('iphone-x');
      cy.get('header.header').should('be.visible');
      cy.get('.post-grid').should('be.visible');
      cy.get('.post-card').should('have.length.greaterThan', 0);
    });

    it('should be responsive on tablet', () => {
      cy.viewport('ipad-2');
      cy.get('header.header').should('be.visible');
      cy.get('.post-grid').should('be.visible');
    });

    it('should be responsive on desktop', () => {
      cy.viewport(1280, 720);
      cy.get('header.header').should('be.visible');
      cy.get('.post-grid').should('be.visible');
    });
  });

  describe('Error Recovery', () => {
    it('should show empty state and allow recovery', () => {
      cy.searchPost('NonexistentSearchTerm');
      cy.get('.empty-state-action').should('be.visible');
      cy.get('.empty-state-action').click();
      cy.get('.post-card').should('have.length.greaterThan', 0);
    });
  });

  describe('Interactions', () => {
    it('should scroll smoothly to top when logo is clicked', () => {
      cy.get('.post-card').last().scrollIntoView();
      cy.get('.logo').click();
      cy.window().its('scrollY').should('be.lessThan', 100);
    });

    it('should apply animations on post cards', () => {
      cy.get('.post-card').first().should('have.class', 'animate-scale-in');
    });

    it('should display post metadata', () => {
      cy.get('.post-card').first().within(() => {
        cy.get('.post-card-author').should('be.visible');
        cy.get('.post-card-subreddit').should('be.visible');
        cy.get('.post-stat').should('have.length.greaterThan', 0);
      });
    });
  });
});
