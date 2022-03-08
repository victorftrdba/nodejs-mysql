const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', 'dev102030', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
    sequelize
}