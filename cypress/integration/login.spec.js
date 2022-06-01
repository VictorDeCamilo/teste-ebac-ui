/// <reference types = "cypress" />

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade: login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    afterEach(() => {
        cy.viewport(1280, 720)
        cy.screenshot()
    });
    
    it('Login com sucesso', () => {
        cy.get('#username').clear().type('aluno_ebac@teste.com')
        cy.get('#password').clear().type('teste@teste.com')
        cy.get('.button[name="login"]').should('be.visible').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').clear().type(perfil.usuario)
        cy.get('#password').clear().type(perfil.usuario)
        cy.get('.button[name="login"]').should('be.visible').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login com sucesso - Usando fixtures', () => {
        cy.fixture("perfil").then(dados=>{
            cy.get('#username').clear().type(dados.usuario)
            cy.get('#password').clear().type(dados.senha, {log: false})
            cy.get('.button[name="login"]').should('be.visible').click()
            cy.get('.page-title').should('contain', 'Minha conta')
        })
    });
    
    it('Login com usuário inválido', () =>{
        cy.get('#username').clear().type('aluno_eac@teste.com')
        cy.get('#password').clear().type('teste@teste.com')
        cy.get('.button[name="login"]').should('be.visible').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    });

    it('Login com senha inválida', () =>{
        cy.get('#username').clear().type('aluno_ebac@teste.com')
        cy.get('#password').clear().type('testeteste.com')
        cy.get('.button[name="login"]').should('be.visible').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail')

    });

});