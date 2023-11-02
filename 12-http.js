//HTTP module

const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req)
    //we are looking for the url property as it tells us whar address client is requesting
    
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    //default response
    res.end(`
        <h1>Oops!</h1>
        <a href="/">back home</a>
    `)
    // res.write('Welcome to our home page')        //req made
    // res.end()                                   //ending the request
})

//what port our server will be listening to
server.listen(3000)