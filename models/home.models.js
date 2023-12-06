const { DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../config/config');

const home = sequelizeConnection.define("home", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    search: {
        type: DataTypes.STRING,
    }, 
    content: {
        type: DataTypes.TEXT,
    },
    holiday: {
        type: DataTypes.STRING,
    },
    holidayDesc: {
        type: DataTypes.TEXT,
    },
    holidayPrice: {
        type: DataTypes.INTEGER,
    },
    holidayRating: {
        type: DataTypes.FLOAT,
    },
});

module.exports = {
    home
};