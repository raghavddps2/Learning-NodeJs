const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const usersRoute = require('./routes/users');
const setDir = require('./util/path');

console.log('hrllo');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(adminRoute);
app.use(usersRoute);

app.get('/',(req,res,next)=>{
    res.sendfile(path.join(setDir,'views','home.html'));
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(setDir,'views','404.html'));
})


app.listen(3000);