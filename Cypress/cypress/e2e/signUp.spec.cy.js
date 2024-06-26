/// <reference types="Cypress" />

describe('Sign Up', () => {

  context('Testes em ViewPort Desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-11')
      cy.visit('/')
    })

    it('Cenário 1: Realizar cadastro com sucesso passando um email com ".com"', () => {
      cy.get('#email')
        .should('be.visible')
        .should('be.empty')
        .type('teste@teste.com')
      cy.get('#password')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('#confirmPassword')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('button')
        .should('be.visible')
        .click({ force: true })
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Cadastro realizado com sucesso!');
      })
      cy.get('[qa-datatest="passwordRule-minLength"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-uppercase"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-specialChar"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-match"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
    })

    it('Cenário 2: Realizar cadastro com sucesso passando um email com ".com.br"', () => {
      cy.get('#email')
        .should('be.visible')
        .should('be.empty')
        .type('teste@teste.com.br')
      cy.get('#password')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('#confirmPassword')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('button')
        .should('be.visible')
        .click({ force: true })
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Cadastro realizado com sucesso!');
      })
      cy.get('[qa-datatest="passwordRule-minLength"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-uppercase"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-specialChar"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-match"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
    })

    it.only('Cenário 3: Realizar cadastro passando um email sem "@"', () => {
      cy.get('#email')
        .should('be.visible')
        .should('be.empty')
        .type('teste.com')
      cy.get('#password')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('#confirmPassword')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('button')
        .should('be.visible')
        .click({ force: true })
      cy.get('#emailError')
        .should('have.text', 'Email inválido');
    })
  })

  context('Testes em ViewPort Tablet', () => {
    beforeEach(() => {
      cy.viewport('ipad-2')
      cy.visit('/')
    })

    it('Cenário 1: Realizar cadastro com sucesso passando um email com ".com"', () => {
      cy.get('#email')
        .should('be.visible')
        .should('be.empty')
        .type('teste@teste.com')
      cy.get('#password')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('#confirmPassword')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('button')
        .should('be.visible')
        .click({ force: true })
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Cadastro realizado com sucesso!');
      })
      cy.get('[qa-datatest="passwordRule-minLength"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-uppercase"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-specialChar"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-match"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
    })

    it('Cenário 2: Realizar cadastro com sucesso passando um email com ".com.br"', () => {
      cy.get('#email')
        .should('be.visible')
        .should('be.empty')
        .type('teste@teste.com.br')
      cy.get('#password')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('#confirmPassword')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('button')
        .should('be.visible')
        .click({ force: true })
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Cadastro realizado com sucesso!');
      })
      cy.get('[qa-datatest="passwordRule-minLength"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-uppercase"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-specialChar"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-match"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
    })
  })

  context('Testes em ViewPort Smartphone', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr')
      cy.visit('/')
    })

    it('Cenário 1: Realizar cadastro com sucesso passando um email com ".com"', () => {
      cy.get('#email')
        .should('be.visible')
        .should('be.empty')
        .type('teste@teste.com')
      cy.get('#password')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('#confirmPassword')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('button')
        .should('be.visible')
        .click({ force: true })
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Cadastro realizado com sucesso!');
      })
      cy.get('[qa-datatest="passwordRule-minLength"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-uppercase"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-specialChar"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-match"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
    })

    it('Cenário 2: Realizar cadastro com sucesso passando um email com ".com.br"', () => {
      cy.get('#email')
        .should('be.visible')
        .should('be.empty')
        .type('teste@teste.com.br')
      cy.get('#password')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('#confirmPassword')
        .should('be.visible')
        .should('be.empty')
        .type('Teste@123', { log: false })
        .should('have.attr', 'type', 'password')
      cy.get('button')
        .should('be.visible')
        .click({ force: true })
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Cadastro realizado com sucesso!');
      })
      cy.get('[qa-datatest="passwordRule-minLength"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-uppercase"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-specialChar"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
      cy.get('[qa-datatest="passwordRule-match"]')
        .should('be.visible')
        .should('have.attr', 'style', 'color: green;')
    })
  })
})