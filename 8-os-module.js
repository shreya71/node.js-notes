//Provides information about OS

const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//methos returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    releases:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS) 