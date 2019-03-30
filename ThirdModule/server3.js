const http = require('http');
const routes = require('./routes'); //This is not local! So, complete one!
//All code there is here in this routes constant

const server = http.createServer(routes);  //We just add the routes.

server.listen(5000);

//We don't wanna write all the code, here only, we will write our routing logic in a different file.
