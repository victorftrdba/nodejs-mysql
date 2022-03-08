const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { UsuarioController } = require('./Controllers/UsuarioController');
const usuarioController = new UsuarioController;

/* USERS ROUTES */
app.get('/', usuarioController.mostrarUsuarios);
app.get('/show-user/:id', usuarioController.mostrarUsuario);
app.post('/save-user', usuarioController.criarUsuario);
app.patch('/update-user/:id', usuarioController.atualizarUsuario);
app.delete('/delete-user/:id', usuarioController.deletaUsuario);

app.listen(PORT);