//import package express
const express = require('express');
//help express to be processed as form data
//so that express can get the username from the body here
const bodyParser = require('body-parser');
//initialise express 
const app = express();

//Show a "Hello, World" greeting and a name input form
function indexHandler(request, response) {
    response.send(`<!DOCTYPE html>
                    <title>Hello, World!</title>
                    <p>Hello, World!</p>
                    <form action = "/greet_user" method = "POST">
                    <p>Your name: <input type="text" name="username"</p>
                    <p><input type="submit"></p>
                    </form>`);
}

//Greet the user supplied in request.body
function formHandler(request, response) {
    const username = request.body.username;
    response.send(`<!DOCTYPE html>
                    <title>Hello ${username}!</title>
                    <p>Hello, ${username}!</p>`);
}

//Handle POSTed form data
//before posted, the app needs to be processed with bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// Set up routes
//1) we sent the HTML page from indexHandler to the server
app.get('/', indexHandler);
//2) the post process the username entered and post a request
//to this route 
app.post('/greet_user', formHandler);

// Start the server
console.log('Runnin on http://localhost:8080/');
app.listen(8080);