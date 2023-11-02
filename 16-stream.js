const {createReadStream} = require('fs')

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 90000
})

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt', {highWaterMark: 9000})
//const stream = createReadStream('../content/big.txt', {encoding: 'utf8'})
stream.on('data', (result) => {
    console.log(result)
})
//we are reding data in chunks
//instead of reading everything and placing that in variable
stream.on('error', (result)=>{
    console.log(result)
} )
