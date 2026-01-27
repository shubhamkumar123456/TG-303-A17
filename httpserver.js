const http = require('http');
const port  = 8090;

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.write('this is home page....');
        res.end()
    }
    else if(req.url==='/about'){
        res.write('this is about page')
        res.end()
    }
})






server.listen(port , ()=>{
    console.log('server is running')
})