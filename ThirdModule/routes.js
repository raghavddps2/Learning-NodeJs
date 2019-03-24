const fs = require('fs');
const requestHandler = (req,res) =>{
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
        const body =[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk); //This gives us the chunk we obtain.
        });
        ///After all this is done!
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString(); //Bufffer object is provided by nodeJs.
            console.log(parsedBody);
            const message = parsedBody.split('=')[1]; //This will give the acual message;
            fs.writeFileSync('message.txt',message,err=>{
                res.statusCode = 302; //Redirection
                res.setHeader('Location','/');  //Whole of this code only works, when the message is put into the file.
                return res.end();
            }); //This will wait until the text file is created. As this is synchronous.
        });

        //ExpressJs will make all of this much easier.

        
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
}


//Now we need to export the request handler.
//We do so by two methods: one is the module.exports

module.exports = requestHandler;
//You can register anything there.

//Sometimes there are many things that we wanna send.
/*
    module.exports = {
        handler: requestHandler,
        someText: 'some Hard coded Text'
    }
    //So. we can use it by routes.someText or routes.handler and son on...
*/

/*
    module.exports.handler = requestHnadler;
    module.exports.someText = 'some hard coded text'; 
    //We can even send things like this.

    //We can have a shortcut, where we can leave modules and then go on...
    exports.handler = requestHandler;

    These are the various ways in which we send various things we receive there.

*/