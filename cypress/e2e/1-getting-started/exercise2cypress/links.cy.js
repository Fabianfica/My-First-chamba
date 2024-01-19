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
        console.log('linea13',href)
        // Verificar que el código de estado sea 200 (OK) u otro si es necesario
        cy.url().should('eq', href);
        cy.get('head meta[name="description"]').should('have.attr', 'content');
  
        // Cerrar la pestaña
        cy.visit('https://demoqa.com/links');
      });
    });
  });
  //Exercise 2 //
  describe('Validar atributos importantes en los links', () => {
    it('Verificar atributos en los links', () => {
      // Visitar la página
      cy.visit('https://demoqa.com/links');
  
      // Obtener todos los enlaces
      cy.get('a').each((link) => {
        // Verificar que el atributo "href" esté presente
        expect(link).to.have.attr('href').and.not.empty;
  
        // Verificar que el atributo "target" sea "_blank" si se abre en una nueva pestaña
        if (link.attr('target')) {
          expect(link.attr('target')).to.equal('_blank');
        }
  
        // Otros atributos importantes que desees verificar
        // Ejemplo: Verificar que el enlace tenga un atributo rel="noopener noreferrer" para seguridad
        expect(link).to.have.attr('rel', 'noopener noreferrer');
      });
    });
  });
  // Ejercise 3 //
  describe('Validar textos en los enlaces', () => {
    it('Verificar textos en los enlaces', () => {
      // Visitar la página
      cy.visit('https://demoqa.com/links');
  
      // Obtener todos los enlaces
      cy.get('a').each((link) => {
        // Obtener el texto del enlace
        const linkText = link.text().trim();
  
        // Realizar las verificaciones necesarias
        // Puedes agregar más expectativas según tus necesidades
        expect(linkText).not.to.be.empty;
  
        // Ejemplo: Verificar que el texto del enlace contenga ciertas palabras clave
        expect(linkText.toLowerCase()).to.contain('demoqa');
  
        // Ejemplo: Verificar que el texto del enlace no contenga ciertas palabras prohibidas
        expect(linkText.toLowerCase()).not.to.contain('error');
  
        // También puedes imprimir el texto para referencia
        cy.log(`Texto del enlace: ${linkText}`);
      });
    });
  });
  //Exercise 3 //
