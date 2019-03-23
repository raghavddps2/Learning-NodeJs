const http = require('http');
const fs = require('fs');
let server = http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type','text/html');
    const method = req.method;
    if(req.url === '/'){
        
        res.write('<html>');
            res.write('<head><title>Enter some text!</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            //A button of type submit in form will be there. //Action is basically, the route we want that to go.Sends a POST request to message.
        res.write('</html>');
        return res.end();
            //get request automatically
            //post request set up by us.
    }
    if(req.url === '/message' && method === 'POST' ){
        //Here, we will redirect the user and create the file, and store the data entered by the user.
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');//Status code of 302 implies, redirection.
        return res.end();
        

    }
    console.log(req.headers);
    res.write('<html>');
    res.write('<head><title>Text Entered!</title></head>');
    res.write('<body><h1>hi!</h1></body>');
res.write('</html>');
res.end();
});

server.listen(3000);

//Now point to be noted here is that, when we go for /message simply, then we are redirected somethere, but when thats a POST request,
//We are redirected to localhost.