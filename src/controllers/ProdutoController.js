const connection = require('../database/connection');

module.exports = {

    async index(req, res) {

        const { COD_FORNECEDOR, NOME_FORNECEDOR, COD_PRODUTO, DESCRICAO_BASE_PRODUTO, MODELO_PRODUTO, DATA_ATIVACAO, DATA_DESATIVACAO, OBSERVACAO} = req.body;
        
        await connection('PRODUTO').insert({
            COD_FORNECEDOR,
            NOME_FORNECEDOR,
            COD_PRODUTO,
            DESCRICAO_BASE_PRODUTO,
            MODELO_PRODUTO,
            DATA_ATIVACAO,
            DATA_DESATIVACAO,
            OBSERVACAO
        });

        return res.json({
            DESCRICAO_BASE_PRODUTO
        });
    }
    
}