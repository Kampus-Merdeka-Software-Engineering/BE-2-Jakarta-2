// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('be_2a', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
