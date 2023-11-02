//FS module
// ->Asynchrnously or non-blocking
// ->Synchronously or blocking

//SYNCHRONOUS

const {readFileSync, writeFileSync} = require('fs');
console.log('start')

//readFileSync: we need to provide two parameters, the path and the encoding 
//node knows how to decode the file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

//writeFileSync: 2 parameters, path if doesn't exist it makes and the text to be passed
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`, 
    {flag: 'a'} //overriding, upend to the file
)
//if value exists they will be overwritten

console.log('Done with the task')
console.log('Starting the next task')
