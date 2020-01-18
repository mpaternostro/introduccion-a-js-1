/// <reference types="Cypress" />

const URL = 'http://127.0.0.1:8080/index-clase-6-tarea-1.html';

const MINIMA_CANTIDAD_INTEGRANTES = 2;
const CANTIDAD_INTEGRANTES_INGRESADA = 3;
const MAXIMA_CANTIDAD_INTEGRANTES = 100;

context('validar miembros ingresados', () => {
    before(() => {
        cy.visit(URL);
    });

    it('prueba clickeando el boton de siguiente paso sin ingresar integrantes', () => {
        cy.contains('Siguiente paso').click();
        cy.get('.list-group-item').should('contain', 'Es necesario completar este campo')
        cy.get('#miembros-grupo-familiar').should('have.class', 'alert-danger');
    });

    it('prueba ingresando mas integrantes que los permitidos y clickea el boton de nuevo', () => {
        cy.contains('Cuantos integrantes').next().type(MAXIMA_CANTIDAD_INTEGRANTES + 1);
        cy.contains('Siguiente paso').click();
        cy.get('.list-group-item').should('contain', 'La cantidad de integrantes ingresada superó el máximo establecido');
        cy.get('#miembros-grupo-familiar').should('have.class', 'alert-danger');
    });

    it('prueba ingresando menos integrantes que los permitidos y clickea el boton de nuevo', () => {
        cy.contains('Cuantos integrantes').next().clear().type(MINIMA_CANTIDAD_INTEGRANTES - 1);
        cy.contains('Siguiente paso').click();
        cy.get('.list-group-item').should('contain', 'La cantidad de integrantes ingresada debe ser mayor a 1');
        cy.get('#miembros-grupo-familiar').should('have.class', 'alert-danger')
    });

    it('ingresa un valor correcto y pasa a ingresar las edades', () => {
        cy.contains('Cuantos integrantes').next().clear().type(CANTIDAD_INTEGRANTES_INGRESADA);
        cy.contains('Siguiente paso').click();
        cy.get('#inputs').should('be.visible');
    });

});

const MINIMA_EDAD_PERMITIDA = 0;
const MAXIMA_EDAD_PERMITIDA = 120;
let NUMERO_RANDOMIZADO;

context('validar edades ingresadas', () => {
    it('chequea que se hayan creado la cantidad de campos deseados', () => {
        cy.get('.input-group').should('have.length', CANTIDAD_INTEGRANTES_INGRESADA);
    });

    it('prueba clickeando el boton de calcular sin haber ingresado ninguna edad', () => {
        cy.contains('Calcular').click();
        cy.get('#errores').children().should('have.length', CANTIDAD_INTEGRANTES_INGRESADA)
            .should('contain', 'Es necesario completar este campo');
        cy.get('.alert-danger').should('have.length', CANTIDAD_INTEGRANTES_INGRESADA);
    });

    it('chequea que al haber ingresado valores correctos en los campos 2 y 3 estos se desmarquen como error', () => {
        NUMERO_RANDOMIZADO = randomizarNumero();
        cy.get('#integrante-2').type(NUMERO_RANDOMIZADO);
        NUMERO_RANDOMIZADO = randomizarNumero();
        cy.get('#integrante-3').type(NUMERO_RANDOMIZADO);
        cy.contains('Calcular').click();
        cy.get('#errores').should('have.length', 1);
        cy.get('#integrante-2').should('not.have.class', 'alert-danger');
        cy.get('#integrante-3').should('not.have.class', 'alert-danger');
    });

    it('ingresa un valor menor al permitido en el primer campo y clickea en calcular', () => {
        cy.get('#integrante-1').type(MINIMA_EDAD_PERMITIDA - 1);
        cy.contains('Calcular').click();
        cy.get('#errores').children().should('contain', 'La edad del integrante ingresada debe ser mayor o igual a 0');
    });


    it('ingresa un valor mayor al permitido en el primer campo y clickea en calcular', () => {
        cy.get('#integrante-1').clear().type(MAXIMA_EDAD_PERMITIDA + 1);
        cy.contains('Calcular').click();
        cy.get('#errores').children().should('contain', 'La edad del integrante ingresada superó el máximo establecido');
    });

    it('ingresa un valor correcto en el primer campo y clickea en calcular', () => {
        NUMERO_RANDOMIZADO = randomizarNumero();
        cy.get('#integrante-1').clear().type(NUMERO_RANDOMIZADO);
        cy.contains('Calcular').click();
        cy.get('#errores').should('be.empty');
        cy.get('#mostrar-datos').should('be.visible');
    });

});

function randomizarNumero() {
    return Math.floor(Math.random() * 120);
}