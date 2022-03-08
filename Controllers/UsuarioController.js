
const { User } = require('../Model/User');

class UsuarioController {
    mostrarUsuarios = async (req, res) => {
        const response = await User.findAll();

        return res.send(response);
    }

    mostrarUsuario = async (req, res) => {
        const { id } = req.params;

        const response = await User.findOne({
            where: {
                id
            }
        });

        return res.send(response);
    }

    criarUsuario = async (req, res) => {
        const { firstName, lastName } = req.body;

        const response = await User.create({ firstName, lastName });

        return res.send(response);
    }

    atualizarUsuario = async (req, res) => {
        const { id } = req.params;
        const { firstName, lastName } = req.body;

        const response = await User.update({ firstName, lastName }, {
            where: {
                id
            }
        });

        return res.send({"success": true});
    }

    deletaUsuario = async (req, res) => {
        const { id } = req.params;

        const response = await User.destroy({
            where: {
                id
            }
        });

        return res.send({"success": true});
    }
}

module.exports = {
    UsuarioController
}