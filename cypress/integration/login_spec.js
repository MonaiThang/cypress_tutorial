describe('End to End Tests', function() {
  it('Logs in', function() {
    // cy.visit('/login', { timeout: 5000 });
    // cy.get('[data-cy=login]').click({ position: 'topLeft' });
    cy.login('foo', 'bar')
    cy.get('li.book').should('have.length', 3);
  })

  it('unable to login with incorrect credentials', function() {
    cy.login('xxx', 'yyy')
    cy.get('li.book').should('have.length', 0)
  })
})