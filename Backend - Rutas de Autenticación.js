const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta de Registro
router.post('/register', authController.register);

// Ruta de Login
router.post('/login', authController.login);

module.exports = router;
