describe('Página de cadastro', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-iota.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })   
  
  it('Deve preencher os campos do cadastro corretamente e clicar no botão cadastrar', () => {
    cy.cadastrar('Marjorie marjorie2','marjoriemarjorie2@email.com', 'Senha123456')  
    cy.contains('button', 'Cadastrar').click();
  })
})


