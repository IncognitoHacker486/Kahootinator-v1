console.log("Welcome fellow classmates. To...")
console.log('\x1b[35m',   '    __ __ ___    __  ______  ____  ______   ________    ____  ____  ____  __________ ')
console.log('\x1b[35m',   '   / //_//   |  / / / / __ |/ __ |/_  __/  / ____/ /   / __ |/ __ |/ __ |/ ____/ __ |')
console.log('\x1b[35m',  '  / ,<  / /| | / /_/ / / / / / / / / /    / /_  / /   / / / / / / / / / / __/ / /_/ /')
console.log('\x1b[35m', ' / /| |/ ___ |/ __  / /_/ / /_/ / / /    / __/ / /___/ /_/ / /_/ / /_/ / /___/ _, _/ ')
console.log('\x1b[35m', '/_/ |_/_/  |_/_/ /_/|____/|____/ /_/    /_/   /_____/|____/|____/_____/_____/_/ |_|')
console.log('\x1b[37m', 'Made by Landon Myers...')
console.log(' ')
var Kahoot = require("kahoot.js-latest");
var colors = require('colors');    
const prompt = require('prompt-sync')();
const name = prompt('Bot names: ')
const pin = prompt('Game PIN: ');
number = 1
number2 = 1
setInterval(kahoot, 830)
function kahoot() {
const client = new Kahoot;
client.join(pin, name + (number++))
client.on("Joined", () => {
 console.log("Bots sent: " + number2++);
}); 

client.on("QuizEnd", () => {
  console.log("Game has ended.");
});
}