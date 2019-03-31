const path = require('path');
const express = require('express');
const bodyParser =require('body-parser');
const app = express();


app.set('view engine','pug');
app.set('views','views');
const rootDir = require('./util/path');

const adminData = require('./routes/admin'); //Just importing the rotes we created.
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

//This will parse the url sent.
app.use('/admin',adminData.routes); //Just directly using like a function.
app.use(shopRoutes); //Just directly use like a function
//Please note that the order matters.
//admin/add-product ==> GET
//admin/product ==>POST
app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(rootDir,'views','404.html')); //We  can even et the status code.
    res.render('404',{docTitle:'Error 404!'});
})

app.listen(3000);