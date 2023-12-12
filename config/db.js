// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('be_2a', 'railway', 'G65B-Fc3fAAeb5A4Ch5c3bC-CBDg1B5F', {
    host: 'roundhouse.proxy.rlwy.net',
    port: 19068,
    dialect: 'mysql'
});

module.exports = sequelize;
