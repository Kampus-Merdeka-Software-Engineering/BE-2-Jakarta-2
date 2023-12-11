const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const HolidaysPlace = require('../models/holidaysPlaceModel');

const Booking = sequelize.define('Booking', {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    notes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

Booking.belongsTo(HolidaysPlace, { foreignKey: 'holidayId' });

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Berhasil tersambung dengan database!');
        await Booking.sync({ alter: true });
        console.log('Model "Booking" tersinkronisasi dengan tabel di database');
    } catch (error) {
        console.error('Gagal terkoneksi:', error);
    }
})();

module.exports = Booking;
