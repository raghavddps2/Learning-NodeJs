const express = require('express');

const app = express();
console.log('server running!');

app.use('/users',(req,res,next)=>{
    console.log("Hey, this is middleware 1");
    res.send('<h1>Hey macha, Welcome<h1>');
})

app.use('/',(req,res,next)=>{
    console.log("Hey, this is middleware 2");
    res.send('<h1>Sorry, you are not a macha!</h1>');
})
app.listen(3000);

//Woah, we achieved a lot just using 16 lines of code in express.
//the url we specify means that it should begin with this.
