/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco.page';
const perfil = require('../fixtures/perfil.json')
const endereco = require('../fixtures/endereço.json')

describe('Funcionalidade: Endereços - faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)
    });

    it('Cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flávio', 'Araújo', 'Google', 'Brasil', 'Avenida Brasil', '311', 'São Paulo', 'São Paulo', '01222000', '11982298272', 'flavio@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

    it('Cadastro de faturamento com sucesso usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            endereco[0].nome,
            endereco[0].sobrenome,
            endereco[0].empresa,
            endereco[0].pais,
            endereco[0].endereco,
            endereco[0].numeroEnd,
            endereco[0].cidade,
            endereco[0].estado,
            endereco[0].cep,
            endereco[0].telefone,
            endereco[0].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});