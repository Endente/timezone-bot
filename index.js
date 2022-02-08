const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const test = require('./test.js')
const connectdb = require('./connect-db.js')
const changePrefix = require('./changeprefix.js')
const dbstatus = require('./dbstatus.js')
const checkCommand = require('./checkCommand.js')
function logToConsole(message){
    console.log(`Running "${message}"; Requested by "${message.author.username}" at "${message.id}" on Channel "${message.channelId}"`);
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