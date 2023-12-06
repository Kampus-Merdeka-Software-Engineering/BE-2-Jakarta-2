const {Sequelize} = require('sequelize');

//tambahkan database
const sequelizeConnection = new Sequelize('database','root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const establishConnection = async function() {
    try {
        await sequelizeConnection.authenticate()
        console.log("connection has been established")
    } catch(error) {
        console.error("unable to connect to database", error)
    }
};

module.exports = {
    sequelizeConnection,
    establishConnection
};