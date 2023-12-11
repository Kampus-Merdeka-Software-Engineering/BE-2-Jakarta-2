const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');

const HolidaysPlace = sequelize.define('HolidaysPlace', {
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quota: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Berhasil tersambung dengan database!');
        await HolidaysPlace.sync({ alter: true });
        console.log('Model "Holidays Place" tersinkronisasi dengan tabel di database');
    } catch (error) {
        console.error('Gagal terkoneksi:', error);
    }
})();

module.exports = HolidaysPlace;