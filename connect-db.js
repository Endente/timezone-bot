const config = require('./config.json')
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', '', '', {dialect:'sqlite', storage:'sqlite.db'})
//const sequelize = new Sequelize(`postgres://${config.dbUser}:${config.dbPass}@${config.dbAddress}:${config.dbPort}/${config.dbServer}`)
async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();