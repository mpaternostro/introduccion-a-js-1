const URL = 'http://127.0.0.1:8080';

context('calculador promedios familiares', () => {
    before(() => { cy.visit(URL) })
    const MINIMA_CANTIDAD_INTEGRANTES = 2;
    const MAXIMA_CANTIDAD_INTEGRANTES = 100;

    describe('elige una cantidad de integrantes', () => {
        cy.get('.miembros-grupo-familiar').should('not.be.empty').
                                           should('have.value', MINIMA_CANTIDAD_INTEGRANTES).
                                           should('have.value', MAXIMA_CANTIDAD_INTEGRANTES)
    });
});