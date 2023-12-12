// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('be_2a', 'railway', '', {
    host: 'roundhouse.proxy.rlwy.net',
    port: 19068,
    dialect: 'mysql'
});

module.exports = sequelize;
