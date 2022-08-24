// Loading Moment.js library using require() method.
var moment = require("moment");

console.log('Hello World');
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());

var name = "world", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);