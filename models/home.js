import { Sequelize } from "sequelize";
import db from "../configurations/database.js";

const { DataTypes } = Sequelize;

const Home = db.define('home', {
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

export default Home;

(async()=>{
    await db.sync();
})();