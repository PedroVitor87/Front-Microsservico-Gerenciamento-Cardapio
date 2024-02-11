const express = require('express');
const cors = require('cors');
const path = require('path');
const rotas = require('./routes/rotas')
const app = express();
const PORT = 4444;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(rotas);


app.listen(PORT, () => {
    console.log(`API Restaurante funcionando na rota ${PORT}`);
});
