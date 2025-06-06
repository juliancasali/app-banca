const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController')

const app = express();

router.get('/list', teacherController.getProfessores);
router.get('/:id', teacherController.getProfessorPorId);
router.post('/create', teacherController.criarProfessor);
router.put('/:id', teacherController.atualizarProfessor);
router.delete('/:id', teacherController.removerProfessor);

module.exports = router;