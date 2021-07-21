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

  it('Should display the users input in the fields', () => {
    cy.get('form input:first').type('Beth').should('have.value', 'Beth')
  })

  it('Should allow user to input informations and make a reservation by clicking the button', () => {
    cy.get('form input:first').type('Beth').should('have.value', 'Beth')
    cy.get('.date').type('07/22').should('have.value', '07/22')
    cy.get('.time').type('6:45').should('have.value', '6:45')
    cy.get('.number').type('2').should('have.value', '2')
    cy.get('.book-btn').click()
    cy.get('main')
  })


});