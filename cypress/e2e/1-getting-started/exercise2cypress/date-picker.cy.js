describe('Validar la visualización de la fecha y hora actual en el date-picker', () => {
  it('Verificar que los campos muestren la fecha y hora actual', () => {
    // Visitar la página
    cy.visit('https://demoqa.com/date-picker');

    // Obtener la fecha y hora actual
    const fechaActual = Cypress.moment().format('MM/DD/YYYY');
    const horaActual = Cypress.moment().format('hh:mm A');

    // Hacer clic en el campo para abrir el date-picker
    cy.get('#datePickerMonthYearInput').click();

    // Verificar que el date-picker esté visible
    cy.get('.react-datepicker').should('be.visible');

    // Verificar que el campo de fecha tenga la fecha actual
    cy.get('.react-datepicker__current-month').should('contain', fechaActual);

    // Cerrar el date-picker
    cy.get('.react-datepicker').click(0, 0); // Hacer clic fuera del date-picker

    // Hacer clic en el campo para abrir el time-picker
    cy.get('#dateAndTimePickerInput').click();

    // Verificar que el time-picker esté visible
    cy.get('.react-datepicker-time__header').should('be.visible');

    // Verificar que el campo de hora tenga la hora actual
    cy.get('.react-datepicker-time__current-hour').should('contain', horaActual);

    // Cerrar el time-picker
    cy.get('.react-datepicker-time__header').click(0, 0); // Hacer clic fuera del time-picker
  });
});
//exercise 2
describe('Validar que el tab se muestre deshabilitado en el date-picker', () => {
  it('Verificar que el tab esté deshabilitado', () => {
    // Visitar la página
    cy.visit('https://demoqa.com/date-picker');

    // Hacer clic en el tab deseado (por ejemplo, Year)
    cy.contains('a', 'Year').click();

    // Verificar que el tab esté deshabilitado
    cy.get('.react-datepicker__year-text--disabled').should('be.visible');
  });
});
//exercise 3
describe('Validar atributos importantes en los links del date-picker', () => {
  it('Verificar atributos en los links', () => {
    // Visitar la página
    cy.visit('https://demoqa.com/date-picker');

    // Obtener todos los enlaces dentro del date-picker
    cy.get('.react-datepicker__navigation').find('a').each((link) => {
      // Verificar la presencia de atributos importantes
      expect(link).to.have.attr('aria-selected');
      expect(link).to.have.attr('href').and.not.empty;
    });
  });
});
//exercise 4
describe('Validar que cada tab muestre al menos un párrafo en el date-picker', () => {
  it('Verificar párrafos en los tabs', () => {
    // Visitar la página
    cy.visit('https://demoqa.com/date-picker');

    // Obtener todos los tabs en el date-picker
    cy.get('.react-datepicker__tab-loop').find('button').each((tab) => {
      // Hacer clic en el tab
      cy.wrap(tab).click();

      // Verificar que haya al menos un párrafo en el contenido del tab
      cy.get('.react-datepicker__tab-content p').should('exist');
    });
  });
});
