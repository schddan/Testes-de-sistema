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

  it("Senhas não correspondem", () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('#confirmPassword').type('admi')
    cy.get('button').click()
    cy.get('#mensagemErro').contains("As senhas não correspondem")
  })

  it('Cadastro sucedido', () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('#confirmPassword').type('admin')
    cy.get('button').click()
    cy.on('window.alert', (text) => {
      expect(text).to.contains('Login efetuado com sucesso!')
    })

  })

  it('Campo nome vazio', () => {
    cy.get('#password').type('admin')
    cy.get('#confirmPassword').type('admin')
    cy.get('button').click()
    cy.get('#mensagemErro').contains("É necessário preencher todos os campos")
  })

  it('Campo senha vazio', () => {
    cy.get('#username').type('admin')
    cy.get('#confirmPassword').type('admin')
    cy.get('button').click()
    cy.get('#mensagemErro').contains("É necessário preencher todos os campos")
  })

  it('Campo confirmar senha vazio', () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('button').click()
    cy.get('#mensagemErro').contains("É necessário preencher todos os campos")
  })
})