const http = require('http') //Node core module
const express = require('express') //Express Framework

const app = express(); //We have it as a fnction, just calling the function


app.use('/',(req,res,next)=>{
    console.log("Hi!!");
    //Once it sees slash, it won;t match with anything else.
    next(); //Now this works,
})

app.use('/add-product',(req,res,next)=>{
    console.log("Middleware 1");
    res.send("<h1>Hello from  product function community      fun");
   
});


app.use('/express',(req,res,next)=>{
    console.log("Middleware 1");
    res.send("<h1>Hello from express community! I am not a part of it!");
   
});

//So, the syntax we basically are using is app.use('/'), we can specify the starting of our route!
app.listen(3000); //This sets up the server.