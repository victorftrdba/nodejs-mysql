const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');

class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "User"
});

User.sync();

module.exports = {
    User
}