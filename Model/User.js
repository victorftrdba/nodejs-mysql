const { Mongoose, userSchema } = require('../config');

class User {
    find = async (id) => {
        const userModel = Mongoose.model('users', userSchema);

        const response = await userModel.find(id).lean().exec();

        return response;
    }
}

module.exports = {
    User
}