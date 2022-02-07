const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const test = require('./test.js')
const connectdb = require('./connect-db.js')
const dbstatus = require('./dbstatus.js')
function logToConsole(message){
    console.log(`Running "${message}"; Requested by "${message.author.username}" at "${message.id}" on Channel "${message.channelId}"`);
}
function checkCommand(message){
    if(message.content == `${config.prefix}test`){
        logToConsole(message);
        test(message);
    }else if(message.content == `${config.prefix}dbstatus`){
        logToConsole(message);
        dbstatus(message)
    }
}
connectdb
client.on('ready', () => {
    console.log('Bot is now online.')
    client.on("messageCreate", (message) => {;
        if(message.content.startsWith(config.prefix)){
            checkCommand(message);
        }
    })
})
client.login(config.token)