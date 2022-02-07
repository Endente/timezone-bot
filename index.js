const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const command = require('./command.js');
client.on('ready', () => {
    console.log('Bot is now online.')
    command(client, 'test', messageCreate => {
        messageCreate.channel.send('Test successfully.')
    })
})
client.login(config.token)