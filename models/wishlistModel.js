const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');

const WishList = sequelize.define('Wishlist', {
    item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item_description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Berhasil tersambung dengan database!');
        await WishList.sync({ alter: true });
        console.log('Model "Wishlist" tersinkronisasi dengan tabel di database');
    } catch (error) {
        console.error('Gagal terkoneksi:', error);
    }
})();

module.exports = WishList;