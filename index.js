const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const test = require('./test.js')
function checkCommand(message){
    if(message.content == "!test"){
        test(message);
    }
}
client.on('ready', () => {
    console.log('Bot is now online.')
    client.on("messageCreate", (message) => {
        if(message.content.startsWith(config.prefix)){
            checkCommand(message);
        }
    })
})
client.login(config.token)