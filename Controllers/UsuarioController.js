
const { User } = require('../Model/User');

class UsuarioController {
    criarUsuario = async (req, res) => {
        const { firstName, lastName } = req.body;

        const response = await User.create({ firstName: firstName, lastName: lastName });

        return res.send(response);
    }
}

module.exports = {
    UsuarioController
}