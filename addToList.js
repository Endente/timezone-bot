const index = require('./index.js')
const config = require('./config.json')
const { Sequelize } = require('sequelize');
const client = require("./index")
const sequelize = new Sequelize('database', '', '', {dialect:'sqlite', storage:'sqlite.db'})
//const sequelize = new Sequelize(`postgres://${config.dbUser}:${config.dbPass}@${config.dbAddress}:${config.dbPort}/${config.dbServer}`)