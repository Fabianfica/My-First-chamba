describe('My first chamba', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/text-box/')
    })

    it('show the screen of practice', () => {
      cy.get('#userName').type('Fabian Fica')
      cy.get('#userEmail').type('fabian.fica@applydigital.com')
      cy.get('#currentAddress').type('Santiago, Chile')
      cy.get('#permanentAddress').type('Pudahuel, Chile')
      cy.get('#submit').click()
    })
}) 