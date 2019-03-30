const express = require('express');
const bodyParser =require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin'); //Just importing the rotes we created.
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));


//This will parse the url sent.
app.use(adminRoutes); //Just directly using like a function.
app.use(shopRoutes); //Just directly use like a function
//Please note that the order matters.

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found! Error: 404</h1>'); //We  can even et the status code.
})

app.listen(3000);