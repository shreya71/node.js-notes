//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-util')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade') // this invokes the function executed in ./7....
console.log(data);
console.log(names);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)