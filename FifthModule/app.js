const http = require('http');

const express = require('express'); //We can go to the typescript file and so that it is exported as a function.
                                    //Hence, we are callling the express function below.

const app = express(); //This makes an express application.


app.use((req,res,next)=>{
    console.log('Middleware');
    next(); //It goes to the next middlware
});
//We notice that only the first function is called and not the second one, to even log that, we have to call the next function 
app.use((req,res,next)=>{
    console.log('Again in Middleware');
    res.send("<h1>Hello from express </h1>");
});
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000); //So, internally does the same we did here.

//With just all this we have created our own server, and that is how express does it.