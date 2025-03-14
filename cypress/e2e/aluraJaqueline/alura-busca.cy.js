describe('Alura busca cursos', () => {

    beforeEach(() => {

        cy.visit('https://www.alura.com.br/');

    })

    it('buscar curso de java', () => {

        cy.get('.header__nav--busca-form').type('java');
        cy.get('.header__nav--busca-submit').click();
        
    })

})