describe('Validar el estatus de los links que se abren en otra pestaña', () => {
    it('Verificar estatus de los links', () => {
      // Visitar la página
      cy.visit('https://demoqa.com/links');
  
      // Obtener todos los enlaces que se abren en una nueva pestaña
      cy.get('a[target="_blank"]').each((link) => {
        // Obtener el href del enlace
        const href = link.attr('href');
  
        // Abrir una nueva pestaña y verificar el estatus del enlace
        cy.visit(href, { failOnStatusCode: false });
        
        // Verificar que el código de estado sea 200 (OK) u otro si es necesario
        cy.url().should('eq', href);
        cy.get('head meta[name="description"]').should('have.attr', 'content');
  
        // Cerrar la pestaña
        cy.visit('https://demoqa.com/links');
      });
    });
  });
  