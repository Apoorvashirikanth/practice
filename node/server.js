// console.log("hey");
// console.log(global);

// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

console.log(__dirname);
// console.log(__filename);

const path = require('path');

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

// const math = require('./math'); // import customised function from other file
// console.log(math.add(2,3));

//         //OR

// const {add} = require('./math');
// console.log(add(2,3));

const {add,sub,mult} = require('./math');
console.log(add(2,3));
console.log(sub(2,3));
console.log(mult(2,3));

console.log(path.join(__dirname,'files','server.js'));