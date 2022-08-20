const config = require('./config.json')
const test = require('./test.js')
const connectdb = require('./connect-db.js')
const dbstatus = require('./dbstatus.js')
const addToList = require(`./addToList.js`)
function logToConsole(message){
    console.log(`Running "${message}"; Requested by "${message.author.username}" at "${message.id}" on Channel "${message.channel.name}"`);
}
module.exports = (message) => {
    try {
        if(message.content == `${config.prefix}test`){
            logToConsole(message);
            test(message);
        }else if(message.content == `${config.prefix}dbstatus`){
            logToConsole(message);
            dbstatus(message)
        }else if(message.content == `${config.prefix}dbstatusprivate`){
            logToConsole(message);
            connectdb;
        }else if(message.content == `${config.prefix}add`){
            logToConsole(message);
            addToList(message);
        }
    }catch(e){}
}