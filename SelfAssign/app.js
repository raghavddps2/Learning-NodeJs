const http = require('http');
const express = require('express');
const bodyPaser = require('body-parser');
const path = require('path');
const app = express();
const rootDir = require('./util/path')
app.set('view engine','pug');
app.set('views','views');
app.use(bodyPaser.urlencoded({extended:false}));
const adminData = require('./routes/admin');
const shopping = require('./routes/shopping');


app.use(adminData.routes);
app.use(shopping);

app.get('/',(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','welcome.html')); //Sending a basic response, added ndemon for instant changes during development.
    console.log("Welcome to server");
    res.render('welcome');
});

app.use((req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','error.html'));
    res.render('error');
})

app.listen(3000);