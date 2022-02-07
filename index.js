const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const test = require('./test.js')
function checkCommand(message){
    if(message.content == "!test"){
        console.log(`Running "${message}"; Requested by "${message.author.username}" at "${message.id}"`);
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