const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');

const Lodging = sequelize.define('Lodging', {
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    quota: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Berhasil tersambung dengan database!');
        await Lodging.sync({ alter: true });
        console.log('Model "Holidays Place" tersinkronisasi dengan tabel di database');
    } catch (error) {
        console.error('Gagal terkoneksi:', error);
    }
})();

module.exports = Lodging;