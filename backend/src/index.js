const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 *
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Aletera uma informação do back-end
 * DELETE: Deletar uma infomação no back-end
 *
 * Tipos de parâmetros:
 * Query params: Parametros nomeados/enviados na rota após "?" (filtros, paginação)
 * Routes params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 *
 * Bancos de Dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 *
 *
 * Driver: SELECT * FROM user
 * Query Builder: table('users').select('*').where()
 *
 */
