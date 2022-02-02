const client = require("./index")
const prefix = require("./config.json")
module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'string'){
        aliases = [aliases]
    }
    client.on("message", messageCreate => {
        const { content } = messageCreate;
        aliases.forEach(alias => {
            const command = `${prefix}${alias}`
            if(content.startsWith(`${command} `) || content === command){
                console.log(`Running the command ${command}`)
                callback(messageCreate)
            }
        });
    })
}