const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type','text/html');
    if(url === '/'){
        //The following code as the part 1 (Welcome text):

        // res.write('<html>');
        //     res.write('<head><title>Route 1 (/)</title></head>')
        //     res.write('<body>');
        //         res.write('<h1>Welcome to Assignment 1</h1>')
        //     res.write('</body>');
        // res.write('</html>');
        // return res.end();

        //The following code as the part 2:
        res.write('<html>');
        res.write('<head><title>Route 1 (/)</title></head>')
            res.write('<body>');
                res.write('<form action="/create-user" method="POST"><input type="text" placeholder="username" name="message"><button type="submit">Create User</button></form>')
            res.write('</body>');
        res.write('</html>');
        return res.end();

    }

    if(url === '/users'){
        res.write('<html>');
            res.write('<head><title>Route 2 (Users)</title></head>')
            res.write('<body>');
                res.write('<ul>');
                    res.write('<li>Raghav</li>');
                    res.write('<li>Rohit</li>');
                    res.write('<li>Nimish</li>');
                    res.write('<li>Ayush</li>');
                    res.write('<li>Ishank</li>');
                res.write('</ul>')
            res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })    
        req.on('end',()=>{
            const bodyParsed = Buffer.concat(body).toString(); //creates a buffer array of all the chunks...
            const message = bodyParsed.split('=')[1];
            console.log(message);
            
                res.statusCode = 302; //Redirection
                res.setHeader('Location','/');  //Whole of this code only works, when the message is put into the file.
                return res.end();
        });
        
    }
});

server.listen(3000);