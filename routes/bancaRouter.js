const express = require('express');
const router = express.Router();
const boardController = require('../controllers/bancaController')

const app = express();

router.get('/list', boardController.getBancas);
router.get('/:id', boardController.getBancaPorId);
router.post('/create', boardController.criarBanca);
router.put('/:id', boardController.atualizarBanca);
router.delete('/:id', boardController.removerBanca);

module.exports = router;