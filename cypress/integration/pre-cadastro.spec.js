/// <reference types = "cypress" />

const faker = require ('faker')

describe('Funcionalidade: Pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Pré-cadastro com sucesso', () => {
        const sobrenomeFaker = faker.name.lastName()
        const nomeFaker = faker.name.firstName()
        const emailFaker = faker.internet.email(nomeFaker)

        cy.get('#reg_email').clear().type(emailFaker)
        cy.get('#reg_password').clear().type('senha222senha')
        cy.get('.button[name="register"]').should('be.visible').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')
            .click()

        cy.get('#account_first_name').clear().type(nomeFaker)
        cy.get('#account_last_name').clear().type(sobrenomeFaker)
        cy.get('.woocommerce-Button').should('be.visible').click()

        cy.get('.woocommerce-message')
        .should('be.visible')
        .and('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
    it.only('Pré-cadastro com sucesso usando custom commands', () => {
        cy.preCadastro('email3@email.com', 'Nome', 'Sobrenome')
        
        cy.get('.woocommerce-message')
        .should('be.visible')
        .and('contain', 'Detalhes da conta modificados com sucesso.')
    });
});