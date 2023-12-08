describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Do the number buttons update the display of the running total?', () => {
    cy.get('#number2').click();
    cy.get('#clear').click();
    cy.get('#number1').click();
    cy.get('#number9').click();

    cy.get('.display').should('contain', '19')

  })


  it('Do the arithmetical operations update the display with the result of the operation?', () => {
    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#operator-add').click()
    cy.get('#number9').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '100')

  })

  it('Can multiple operations be chained together?', () => {
    cy.get('#number5').click();
    cy.get('#operator-add').click()
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '54')
  })

  it('Is the output as expected for a range of numbers (for example, positive)?', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '9')
  })

  it('Is the output as expected for a range of numbers (for example, negative)?', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '-2')
  })

  it('Is the output as expected for a range of numbers (for example, decimals)?', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '0.333333333')
  })
  
  it('Is the output as expected for a range of numbers (for example, very large numbers)?', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '999998000001')
  })

  it('What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what youd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement)', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', 'Dont divide by 0')
  })


})