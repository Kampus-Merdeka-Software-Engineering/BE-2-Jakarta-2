import { Sequelize } from "sequelize";
import db from "../configurations/database.js";

const { DataTypes } = Sequelize;

const Booking = db.define('booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  jumlah: DataTypes.INTEGER,
  catatan: DataTypes.STRING
}, {
  freezeTableName: true
});

export default Booking;

(async()=>{
    await db.sync();
})();