const express = require('express');
const path = require('path');
const router = express.Router();

// Rota principal
router.get('/cardapio', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../html/gestaoCardapio.html'));
    } catch (err) {
        console.error('erro: ', err)
    }
});

// Rota para o formulário de cadastro
router.get('/cardapio/cadastrar-prato', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../html/forms.html'));
    } catch (err) {
        console.error('erro: ', err)
    }
});

module.exports = router;