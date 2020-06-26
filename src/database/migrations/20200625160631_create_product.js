
exports.up = function(knex) {
  return knex.schema.createTable('PRODUTO', function (table) {
    table.integer('ID').primary();
    table.string('COD_FORNECEDOR').notNullable();
    table.string('NOME_FORNECEDOR').notNullable();
    table.string('COD_PRODUTO').notNullable();
    table.string('DESCRICAO_BASE_PRODUTO').notNullable();
    table.string('MODELO_PRODUTO').notNullable();
    table.timestamp('DATA_ATIVACAO').notNullable();
    table.timestamp('DATA_DESATIVACAO');
    table.string('OBSERVACAO').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produto')
};
