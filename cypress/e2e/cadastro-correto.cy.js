describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Felipe Henrique');
    cy.get('[data-test="input-email"]').type('felipe@mail.com');
    cy.get('[data-test="input-password"]').type('Senh@1234567');
    cy.get('[data-test="input-confirm-password"]').type('Senh@1234567');
    cy.get('[data-test="submit-button"]').click();
  })
})