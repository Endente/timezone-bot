var text = "";
module.exports = (message) => {
    arr = message.split(" ");
    arr.shift();
    message = arr.join(" ");
    message.trim();
}