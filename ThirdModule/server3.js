const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){

    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type','text/html');
    if(url === '/'){
        
        res.write('<htmL>');
            res.write('<head><title>Welcome to my page</title></head>');
            res.write('<body>');
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
            res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        res.statusCode = 302; //Redirection
        res.setHeader('Location','/');
        return res.end();
    }
    if(url === '/success'){
        res.write('<htmL>');
            res.write('<head><title>Welcome to my page</title></head>');
            res.write('<body>');
           res.write('<h1>Request Successfull</h1>');
            res.write('</body>');
        res.write('</html>');
        return res.end();
    }
        res.write('<htmL>');
            res.write('<head><title>Default Page</title></head>');
            res.write('<body>');
                res.write('<h1>This is something to be accessed by default</h1>');
            res.write('</body>');
        res.write('</html>');
        res.end();
});

server.listen(3000);