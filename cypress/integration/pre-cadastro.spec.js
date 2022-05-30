/// <reference types = "cypress" />

const faker = require ('faker')

describe('Funcionalidade: Pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Pré-cadastro com sucesso', () => {
        cy.get('#reg_email').clear().type(faker.internet.email())
        cy.get('#reg_password').clear().type('senha222senha')
        cy.get('.button[name="register"]').should('be.visible').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')
            .click()

        cy.get('#account_first_name').clear().type(faker.name.firstName())
        cy.get('#account_last_name').clear().type(faker.name.lastName())
        cy.get('.woocommerce-Button').should('be.visible').click()

        cy.get('.woocommerce-message')
        .should('be.visible')
        .and('contain', 'Detalhes da conta modificados com sucesso.')
    });
});