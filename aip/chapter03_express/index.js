//include a module called 'express'
//module enables us to include in our application a set of functions
//similar to JavaScript libraries
const express = require('express');

//put the module express in app
const app = express();


function indexHandler(request, response) {
    //send request to server 
    //here to print out our new webpage 
    response.send(`<!DOCTYPE html>
                    <title>Hello, World!</title>
                    <h1>AIP_2</h1>
                    <p>Hello, World!<\p>`);
}

//get '/' : default path 
//then indexHandler
app.get('/', indexHandler);

console.log('Running on http://localhost:8080/');
app.listen(8080);