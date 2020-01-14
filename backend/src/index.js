const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://leandro:omnistack@devradar-lmhxy.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

/**
 * Tipos de parâmetros: req.query (filtros, paginação, ordenação...)
 * Query Params: req.params  (Identificar um recurso na alteração ou remoção)
 * Route Params: req.body (Dados para criação ou alteração de um registro.)
 * Body:
 */


app.listen(3333);
