describe('Reservations display', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('Should navigate to the application at http://localhost:3000/', () => {
    cy.url().should('include', 'localhost:3000');
  })

  it('Should display the title of the application', () => {
    cy.get('h1').contains('Turing Cafe Reservations');
  })

  it('Should display input for name, date, time, and number', () => {
    cy.get('form input').should('have.attr', 'name')
    cy.get('form input').should('have.attr', 'placeholder')
    cy.get('form input').should('not.have.value', 'Beth')
  })



});