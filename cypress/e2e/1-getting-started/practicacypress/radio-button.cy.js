describe('My first chamba', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/radio-button')
    })
    it('show the screen of practice', () => {
        cy.get('label[for="yesRadio').click()
        cy.get('label[for="impressiveRadio').click()
    })
})