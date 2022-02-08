let text = "";
const config = require('./config.json')
module.exports = (message) => {
    text = message.split(" ");
    text.shift();
    message = text.join(" ");
    message.trim();
    text = message;
    console.log("If statement reached");
    if(text.indexOf(" ") > 0){
        message.channel.send(`Unsupported character found. No changes were made.`);
    }else{
        config.prefix.replace(JSON.stringify(text));
        message.channel.send(`Prefix changed to "${newPrefix}". Send "TIMEZONE-BOT-RESET-PREFIX" if the Prefix gets lost.`);
    }
}