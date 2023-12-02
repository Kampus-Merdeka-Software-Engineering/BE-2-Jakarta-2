import { Sequelize } from "sequelize";
import db from "../configurations/database.js";

const { DataTypes } = Sequelize;

const Login = db.define('login', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

export default Login;

(async()=>{
    await db.sync();
})();