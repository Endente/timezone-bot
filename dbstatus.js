const index = require('./index.js')
const config = require('./config.json')
const { Sequelize } = require('sequelize');
const client = require("./index")
const sequelize = new Sequelize('database', '', '', {dialect:'sqlite', storage:'sqlite.db'})
//const sequelize = new Sequelize(`postgres://${config.dbUser}:${config.dbPass}@${config.dbAddress}:${config.dbPort}/${config.dbServer}`)
function logToConsole(message){
    console.log(`Running "${message}"; Requested by "${message.author.username}" at "${message.id}" on Channel "${message.channel.name}"`);
}
async function testConnection(message){
    try {
        await sequelize.authenticate();
        logToConsole(message);
        console.log('Connection to database has been established successfully.');
        message.channel.send('Connection to the database has been established successfully.')
    } catch (error) {
        logToConsole(message);
        console.error('Unable to connect to the database:', error);
        message.channel.send('Unable to connect to the database.');
    }
    sequelize.close();
}
module.exports = (message) => {
    testConnection(message);
}