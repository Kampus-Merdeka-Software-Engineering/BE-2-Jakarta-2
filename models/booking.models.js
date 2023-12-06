const { DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../config/config');

const booking = sequelizeConnection.define("booking", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      jumlah: {
        type: DataTypes.INTEGER
      },
      catatan: {
        type: DataTypes.TEXT
      },
});

module.exports = {
    booking
};