//We will be creating a server here using NodeJs.
const http = require('http');  //We have a special function in nodeJs which helps us to import all the modules in NodeJs.
// ./ is like in this folder. require('./http');

//Now we access the proerties as: http.createServer()

//This basically takes a request and there is a function that gets executed, everytime a request is there.
//request listener is function that executes for every incoming request.

// function requestListener(request,response){
// //req is a shorthand used for request
// //res is a shorthand used for response.
// }
// http.createServer(requestListener); //This function is executed for every request that comes to our server.

//We can achienve the same with anonymous function as well.
// http.createServer(function(req,res){

// });
//We can also use an arrow function
const server = http.createServer((req,res)=>{
    // console.log(req); //To see whatever the request comes.

    console.log(req.url,req.headers,req.method);
    //Gives the GET method.
    //This is logged in our console.
    //We are not sending back any response actually.
    // res.setHeader('Content-Type','text/html'); //This will attach a header to the response, saying the type that is a part 
    // //of response is of type html.
    // //Now we have something called as writeHead, it allows us to write something to the header.
    // res.writeHead('<html>');
    //     res.writeHead('<head><title>My First Page</title></head>');
    //     res.writeHead('<body><h1>Hello from my node.js server</h1></body>');
    // res.writeHead('</html>');

    res.setHeader('Content-Type','text/html');

    res.writeHead('<html>');
        res.writeHead('<head');
            res.writeHead('<title>My First Page</title>');
                res.writeHead('<body><h1>Hello from Nodejs</h1></body>');
        res.writeHead('</head>');
    res.writeHead('</html>');
    //Now, we have to tell the node, that we end it.
    res.end(); //We should not change anything after it. It wil give an error

    process.exit(); //will end after onee request
});

server.listen(3000); //Node js will keep on listening the incoming request. This takes arguments(optional), first is the ports
//It will run on the localhost. Local machine, we have the localhost.


