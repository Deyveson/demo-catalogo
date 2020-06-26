const ProdutoController = require('../controllers/ProdutoController')
const { celebrate, Segments, Joi } = require('celebrate');

/**
 * @swagger
 * /catalogo:
 *   post:
 *     tags:
 *       - Produto
 *     name: Search product
 *     summary: search product in catalog
 *     parameters:
 *       - name: body
 *         in: body
 *     responses:
 *       '200':
 *         description: Product successfully registered
 *       '404':
 *         description: Product not found
 */

module.exports = (app) => {
    app.post('/catalogo', celebrate({
        [Segments.BODY]: Joi.object().keys({
            COD_FORNECEDOR: Joi.string().required(),
            NOME_FORNECEDOR: Joi.string().required(),
            COD_PRODUTO: Joi.string().required(),
            DESCRICAO_BASE_PRODUTO: Joi.string().required(),
            MODELO_PRODUTO: Joi.string().required(),
            DATA_ATIVACAO: Joi.string().min(10).required(),
            DATA_DESATIVACAO: Joi.string().min(10),
            OBSERVACAO: Joi.string().required()
        })
    }), ProdutoController.index)
};