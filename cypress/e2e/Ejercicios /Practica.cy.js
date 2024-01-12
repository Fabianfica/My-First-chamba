describe('Home de freerangertesters.com', () => {
    beforeEach(() => {
      cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', () => {
        cy.title().should('include, Free Range Testers')
    })

})