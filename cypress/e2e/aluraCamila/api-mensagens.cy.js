describe('Api Adopet', () => {

    it('Mensagens da API', () => {
        //requisição ao backend - será um método que recebe um objeto dentro
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/fbad3280-39a4-45ac-b062-c254dfe08124',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})