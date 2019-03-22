const http = require('http');
const url = 'http://api.openweathermap.org/data/2.5/weather?q=muzaffarnagar,in&appid=e425d8366fa1a2866962a6c56062a3b0'; 

var server = http.createServer(function(req,res){
    var request = require('request');
    //We can use this to amke a request.
    request(url,function(err,rep,body){
        var data = JSON.parse(body);
        // res.writeHead('Content-Type','text/html');
        res.write('<h1>Country: </h1>'+data['name']);
        res.write('<h1>Temperature</h1>'+data.main['temp']);
        res.write('<h1>Humidity</h1>'+data.main['humidity']);
        res.end();
    });
        
    
}).listen(3000);