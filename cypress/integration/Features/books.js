describe('Go to Mozilla developer docs', () => {
    it('Visit to Mozilla developer docs homepage', () => {

      // Go to the homepage
      cy.visit('/')

      // Click on Getting started link
      cy.contains('Getting started').click()

      cy.url().should('include', '/Getting_started')

      // search for MDN account
      cy.get('#main-q').type("MDN account").type('{enter}')

      cy.title().should('eq', 'Search Results for "MDN account" | MDN')
    })
  })