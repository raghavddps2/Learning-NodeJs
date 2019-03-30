const path = require('path');

module.exports = path.dirname(process.mainModule.filename); 
//This gives the rootdirectory. Using this will make our code look more cleaner.
//This will give us the location for the file from where our application is running!