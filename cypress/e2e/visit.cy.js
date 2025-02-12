describe('template spec', () => {
  it('validado', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Felipe Henrique Soares');
    cy.get('input[name="email"]').type('felipehenrique@mail.com');
    cy.get('input[name="password"]').type('Senh@1234567');
    cy.get('input[name="confirm_password"]').type('Senh@1234567');
    cy.contains('button', 'Cadastrar').click();
  })
})