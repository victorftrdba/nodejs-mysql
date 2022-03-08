const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { UsuarioController } = require('./Controllers/UsuarioController');
const usuarioController = new UsuarioController;

app.get('/', (req, res) => {
    res.send({"message": "API funcionando!"});
})

app.post('/login', usuarioController.login);

app.listen(PORT);