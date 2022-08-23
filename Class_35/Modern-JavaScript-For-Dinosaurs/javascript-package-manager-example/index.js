// Loading Moment.js library using require() method.
var moment = require("moment");

// console.log('hello world');
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());