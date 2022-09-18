/* eslint-disable no-undef */
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');
   
    cy.get('#Username')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
      cy.contains('Contained').click();
  })
})