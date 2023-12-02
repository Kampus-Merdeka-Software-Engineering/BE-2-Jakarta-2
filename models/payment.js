import { Sequelize } from "sequelize";
import db from "../configurations/database.js";

const { DataTypes } = Sequelize;

const Payment = db.define('payment', {
  id_payment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  paymentMethod: DataTypes.STRING,
}, {
  freezeTableName: true,
});

export default Payment;

(async()=>{
    await db.sync();
})();