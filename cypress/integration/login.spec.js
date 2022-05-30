/// <reference types = "cypress" />

context('Funcionalidade: login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Login com sucesso', () => {
        cy.get('#username').clear().type('aluno_ebac@teste.com')
        cy.get('#password').clear().type('teste@teste.com')
        cy.get('.button[name="login"]').should('be.visible').click()
        cy.get('.page-title').should('contain', 'Minha conta')
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