/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco.page';
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade: Endereços - faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)
    });

    it.only('Cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flávio', 'Araújo', 'Google', 'Avenida Brasil', '311', 'São Paulo', 'São Paulo', '01222000', '11982298272', 'flavio@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});