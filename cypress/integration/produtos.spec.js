/// <reference types = "cypress" />

describe('Funcionalidade: Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto', () => {
        cy.get('[class="product-block grid"]')
            .eq(3)
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        const nomeProduto = 'Ajax Full-Zip Sweatshirt'
        const quantidade = 2

        cy.get('[class="product-block grid"]')
            .eq(3)
            .click()

        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', nomeProduto)
    });
});