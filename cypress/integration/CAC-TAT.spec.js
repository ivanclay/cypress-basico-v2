// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('./src/index.html');
    cy.get('#firstName').clear();
    cy.get('#lastName').clear();
    cy.get('#email').clear();
    cy.get('#phone').clear();
  })

describe('Central de Atendimento ao Cliente TAT', function() {
    
    it('verifica o título da aplicação (contain)', function() {
        cy.title().should('contain', 'Central de Atendimento ao Cliente TAT');
  
    })

    it('verifica o título da aplicação (be.equal)', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#email').type('john.doe@gmail.com');
        cy.get('#open-text-area').type('Mostrando os testes funcionando....', {delay:1});

        //cy.get('.button').click();
        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#email').type('john.doe-gmail.com');
        cy.get('#open-text-area').type('Mostrando os testes funcionando....', {delay:1});
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    })

    it('campo telefone continua vazio quando preenchido com não numéricos', function() {
        cy.get('#phone').type('qwerty').should('have.value', '');
        
    })


    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#email').type('john.doe@gmail.com');
        cy.get('#phone-checkbox').check();
        cy.get('#open-text-area').type('Mostrando os testes funcionando....', {delay:50});
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    })


    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        
        cy.get('#firstName').type('John').should('have.value', 'John').clear().should('have.value', '');
        cy.get('#lastName').type('Doe').should('have.value', 'Doe').clear().should('have.value', '');
        cy.get('#phone').type('12345').should('have.value', '12345').clear().should('have.value', '');
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    })

    
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios (CONTAINS TEXT)', function() {
        cy.contains('Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios (CONTAINS DOM ELEM)', function() {
        cy.contains('button','Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit();
        cy.get('.success').should('be.visible');
    })

    it('seleciona um produto (YouTube) por seu texto (USE DOM ELEM)', function() {
        cy.get('select').select('YouTube').should('have.value', 'youtube');
        
    })

    it('seleciona um produto (YouTube) por seu texto (USE ELEM ID)', function() {
        cy.get('#product').select('YouTube').should('have.value', 'youtube');
        
    })

    it('seleciona um produto (Mentoria) por seu valor (value) (USE DOM ELEM)', function() {
        cy.get('select').select('mentoria').should('have.value', 'mentoria');
        
    })

    it('seleciona um produto (Mentoria) por seu valor (value)  (USE ELEM ID)', function() {
        cy.get('#product').select('mentoria').should('have.value', 'mentoria');
        
    })

    it('seleciona um produto (Blog) por seu índice (USE DOM ELEM)', function() {
        cy.get('select').select(1).should('have.value', 'blog');
        
    })

    it('seleciona um produto (Blog) por seu índice  (USE DOM ELEM)', function() {
        cy.get('#product').select(1).should('have.value', 'blog');
        
    })

    it('marca o tipo de atendimento "Feedback" (USE CYPRESS SELECTOR)', function() {
        cy.get(':nth-child(4) > input').check().should('have.value', 'Feedback');
        
    })

    it('marca o tipo de atendimento "Feedback" (USE DOM SELECT)', function() {
        cy.get('input[type="radio"][value="feedback"').should('have.value', 'Feedback');
        
    })

    it.only('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]').check()
        .should('have.length', 3)
        .each(function($radio) {
            cy.wrap($radio).check();
            cy.wrap($radio).should('be.checked');

        });
        
    })

  })