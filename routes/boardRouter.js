const express = require('express');
require('express-group-routes');
const boardController = require('../controllers/boardController')

const app = express();

app.group("/bancas", (router) => {
    router.get('/list', boardController.getBancas);
    router.get('/:id', boardController.getBancaPorId);
    router.post('/create', boardController.criarBanca);
    router.put('/:id', boardController.atualizarBanca);
    router.delete('/:id', boardController.removerBanca);
})

module.exports = app;