const express = require('express');
const app = express();
const port = 8080;


app.use(express.json())   //middleware 

// Middleware --> middleware are functions that have the access of requesting to an object responding  to an object . they can  also modify the request and response

app.use((req, res , next)=>{
    console.log("i am middleware function")
    // res.send("middleware response")
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World..')
})


app.get('/products', (req,res)=>{
    let arr = [
        {name:"iphone", price:45000, rating:5},
        {name:"samsung", price:65000, rating:4},
        {name:"Real Me", price:45000, rating:3},
        {name:"Mi", price:25000, rating:2},
    ]
    res.json({products:arr})
})

let arr1 = [
    {name:"john", email:"john@gmail.com", details:{city:"kanpur", state:"UP"}},
    {name:"xyz", email:"xyz@gmail.com", details:{city:"kanpur", state:"UP"}},
    {name:"nick", email:"nick@gmail.com", details:{city:"lucknow", state:"UP"}},
    {name:"jane", email:"jane@gmail.com", details:{city:"unnao", state:"UP"}},
] 


// Data send in body example -->
app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.json("all is good")
})


// Data send in params example
app.get('/trial/:data',(req,res)=>{
    console.log(req.params)
    console.log(req.params.data)
    res.send("data recieved")
})



app.listen(port , ()=>{
    console.log('server is running')
})


// https://github.com/shubhamkumar123456/TG-303-A17.git