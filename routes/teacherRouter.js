const express = require('express');
require('express-group-routes');
const teacherController = require('../controllers/teacherController')

const app = express();

app.group('/professores', (router) => {
    router.get('/list', teacherController.getProfessores);
    router.get('/:id', teacherController.getProfessorPorId);
    router.post('/create', teacherController.criarProfessor);
    router.put('/:id', teacherController.atualizarProfessor);
    router.delete('/:id', teacherController.removerProfessor);
})

module.exports = app;