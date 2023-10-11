describe('Pizza test, sprint 7 challenge', () => {
  it('Go to the site', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#order-pizza').should('be.visible');
  });

  it('test that you can add text to the box', () => {
    cy.visit('http://localhost:3000/pizza');

    cy.get('#pizza-form').should('be.visible');
    cy.get('#name-input').should('be.visible').type('Hello, World');

    cy.get('#order-button').should('be.visible').click();
  });

  it('test that you can select multiple toppings', () => {

    cy.visit('http://localhost:3000/pizza');

    cy.get('#pizza-form').should('be.visible');
    cy.get('[type="checkbox"]').should('be.visible').check();
  });

  it('test that shows the message "name must be at least 2 characters" when name text is lower than two characters', () => {
    cy.visit('http://localhost:3000/pizza');

    cy.get('#pizza-form').should('be.visible');
    cy.get('#name-input').should('be.visible').type('a');

    cy.get('#order-button').should('be.visible').click();

    cy.get('#pizza-form').contains('name must be at least 2 characters')
  });

  it('test that you can submit the form', () => {
    cy.visit('http://localhost:3000/pizza');

    cy.get('#pizza-form').should('be.visible');
    cy.get('#name-input').should('be.visible').type('Angel Angeles');
    //large medium small
    cy.get('#size-dropdown').should('be.visible').select('large', 'large');

    cy.get('[type="checkbox"]').should('be.visible').check();
    cy.get('#special-text').should('be.visible').type('special data');

    cy.get('#order-button').should('be.visible').click();
  });
})