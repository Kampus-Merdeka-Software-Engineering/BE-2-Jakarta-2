const { DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../config/config');

const payment = sequelizeConnection.define("payment", {
    id_payment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fullName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    phoneNumber: {
        type: DataTypes.STRING,
    },
    paymentMethod: {
        type: DataTypes.STRING,
    }, 
});

module.exports = {
    payment
};