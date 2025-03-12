describe('template spec', () => {
    it('validado', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('a', 'Cadastrar').click();
      cy.get('input[name="nome"]').type('FelipeHenri');
      cy.get('input[name="email"]').type('felipehenri@mail.com');
      cy.get('input[name="password"]').type('Senh@1234567');
      cy.get('input[name="confirm_password"]').type('Senh@1234567');
      cy.contains('button', 'Cadastrar').click();
    })
  })