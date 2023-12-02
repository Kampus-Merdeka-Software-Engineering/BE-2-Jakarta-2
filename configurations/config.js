const { Sequelize } = require('sequelize');

const sequelizeConnection = new Sequelize('database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}); 

const db = new Sequelize('nama_database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;

const establishConnection = async function() {
    try {
        await sequelizeConnection.authenticate()
        console.log("Connection has been established")
    } catch (error) {
        console.error("Unable to connect to database", error)
    }
}

module.exports = {
    sequelizeConnection,
    establishConnection
}