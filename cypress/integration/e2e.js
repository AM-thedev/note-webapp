describe('Redux Notekeeper', function() {
  it('filter and create new exist', function() {
    cy.visit('http://localhost:3000')
    cy.contains('filter:')
    cy.contains('create new')
  })
})