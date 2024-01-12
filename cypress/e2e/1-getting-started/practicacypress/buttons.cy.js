describe('My first chamba', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/buttons')
    })
    it('show the screen of practice', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#rightClickBtn').rightclick()
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(3) > button').click()
    })
})