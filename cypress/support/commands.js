/// <reference types="cypress" />


Cypress.Commands.add('login', (usuario, senha) =>{
    cy.get('#username').clear().type(usuario)
    cy.get('#password').clear().type(senha)
    cy.get('.button[name="login"]').should('be.visible').click()
    cy.get('.page-title').should('contain', 'Minha conta')
})

Cypress.Commands.add('preCadastro', (email, nome, sobrenome) =>{
    cy.get('#reg_email').clear().type(email)
    cy.get('#reg_password').clear().type('senha222senha')
    cy.get('.button[name="register"]').should('be.visible').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')
        .click()

    cy.get('#account_first_name').clear().type(nome)
    cy.get('#account_last_name').clear().type(sobrenome)
    cy.get('.woocommerce-Button').should('be.visible').click()
})

Cypress.Commands.add('addProdutos', (nomeProduto, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]')
        .contains(nomeProduto)
        .click()
    
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})