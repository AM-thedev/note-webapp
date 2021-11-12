describe('Redux Notekeeper', function() {
  it('Test notes exist', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Test note 1')
    cy.contains('Test note 2')
  })
})