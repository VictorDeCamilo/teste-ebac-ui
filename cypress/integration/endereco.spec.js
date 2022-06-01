/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade: Endereços - faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)
    });

    it('Cadastro de faturamento com sucesso', () => {
        
    });
});