const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// Verificar permissão de administrador
const isAdmin = (req, res, next) => {
    if (req.user && req.user.admin) {
        console.log(`Acesso de administrador permitido: ${req.user.nome}`) // Log de administrador
        return next(); // Usuário é admin, prossegue
    } else {
        console.warn(`Tentativa de acesso negada. Usuário: ${req.user ? req.user.nome : 'Unknown'}`)
        return res.status(403).json({
            error: 'Acesso Negado: Apenas Administradores',
            code: 403
        }); // Proíbe o acesso (403 - Forbidden)
    }
};

// Rota protegida para administradores
router.get('/', authController.auth, isAdmin, (req, res) => {
    res.status(200).send('Esse dado só deve ser visto pelo admin')
});

module.exports = router;