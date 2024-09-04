describe('pagina de login', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })
  it("Senha errada", () => {
    cy.get('#username').type('Keliven')
    cy.get('#password').type('admin')
    cy.get('button').click()
    cy.get('#mensagemErro').should('be.visible')
  })

  it('Senha correta', () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('button').click()
    cy.on('window.alert', (text) => {
      expect(text).to.contains('Login efetuado com sucesso!')
    })

  })
})