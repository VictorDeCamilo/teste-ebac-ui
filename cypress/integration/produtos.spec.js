/// <reference types = "cypress" />

describe('Funcionalidade: Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto', () => {
        cy.get('[class="product-block grid"]')
            .eq(3)
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        const nomeProduto = 'Abominable Hoodie'
        const quantidade = 2

        cy.get('[class="product-block grid"]')
            .eq(0)
            .click()

        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', nomeProduto)
    });

    it('Adicionar produto ao carrinho usando custom commands', () => {
        cy.addProdutos('Abominable Hoodie', 'XS', 'Red', 3)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
        cy.get('.woocommerce-message').should('contain', 'Abominable Hoodie')
    });
});