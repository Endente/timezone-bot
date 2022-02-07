const client = require("./index")
module.exports = (message) => {
message.channel.send("Test successfully. (Sent from test.js)");
}