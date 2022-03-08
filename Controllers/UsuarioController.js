
const { User } = require('../Model/User');
const userModel = new User;

class UsuarioController {
    login = (req, res) => {
        const { id } = req.body;

        const response = userModel.find({ _id: id });

        return res.send(response);
    }
}

module.exports = {
    UsuarioController
}