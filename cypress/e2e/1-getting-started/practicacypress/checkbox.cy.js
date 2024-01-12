describe('My first chamba', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/checkbox')
    })
    it('show the screen of practice', () => {
        cy.get('.rct-collapse').click()
    })
}) 