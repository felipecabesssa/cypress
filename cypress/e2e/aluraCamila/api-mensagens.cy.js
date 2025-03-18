describe('Api Adopet', () => {
    const tempoEsperado = Math.random() * 1000
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYmFkMzI4MC0zOWE0LTQ1YWMtYjA2Mi1jMjU0ZGZlMDgxMjQiLCJhZG9wdGVyTmFtZSI6ImZlbGlwZWFuZHJhZGUiLCJpYXQiOjE3NDIzMTQ4NDcsImV4cCI6MTc0MjU3NDA0N30.FAjjeh-g_FpUHc8Zqqi9VrS8ZEqxIrEtJja8xQ6vv9k`

    it('Mensagens da API', () => {
        //requisição ao backend - será um método que recebe um objeto dentro
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/fbad3280-39a4-45ac-b062-c254dfe08124',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})