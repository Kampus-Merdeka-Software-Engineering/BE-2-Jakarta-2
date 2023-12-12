// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('be_2a', 'railway', '', {
    host: 'railway',
    dialect: 'mysql'
});

module.exports = sequelize;
