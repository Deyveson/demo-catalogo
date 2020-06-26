const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Product', () => {

    beforeEach(async () => {
        await connection.migrate.latest();
    })

    it('should register new product', async () => {
        const response = await request(app)
        .post('/catalogo')
        .send({
            COD_FORNECEDOR: "144",
            NOME_FORNECEDOR: "COFAP AMORTEC 2",
            COD_PRODUTO: "160012",
            DESCRICAO_BASE_PRODUTO: "AMORTECEDOR 2",
            MODELO_PRODUTO: " ",
            DATA_ATIVACAO: "26/06/2020",
            DATA_DESATIVACAO: "26/07/2020",
            OBSERVACAO: "TESTE PERSISTENCIA"   
        });

        expect(response.body.DESCRICAO_BASE_PRODUTO).toBe("AMORTECEDOR 2");
    })
})