// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT :: Privacy', function() {
    
    it('testa a página da política de privavidade de forma independente', function() {
        cy.visit('./src/privacy.html');
        cy.get('#title').contains('CAC TAT - Política de privacidade').should('be.visible');
    })


    Cypress._.times(15, function(){
        it.only('testa a página da política de privavidade de forma independente (USE ._.times)', function() {
            cy.visit('./src/privacy.html');
            cy.get('#title').contains('CAC TAT - Política de privacidade').should('be.visible');
        })
    })


  })