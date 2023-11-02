//FS module
// ->Asynchrnously or non-blocking
// ->Synchronously or blocking

//ASYNCHRONOUS

const {readFile, writeFile} = require('fs');

console.log('start')
//we need to provide a callback as that is how a synch. function works
//parameters: path, encoder and the callback function
//to eliminate the buffer instead of text we use the encoder
readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task');
                //console.log(result);
            }
        )
    })
})
console.log('starting next task')

//async approach we start the task n continue with the code starting new task whereas the previous task running parallely

//THIS IS A CALLBACK HELL