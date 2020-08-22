const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var counter = 0;

function indexHandler(request, response) {
    response.send(`<!DOCTYPE hmtl>
                    <title>Ping Pong Challenge</title>
                    <p>Ping?</p>
                    <form action="/pong" method="POST">
                    <p>Count: ${counter}</p>
                    <p><input type="submit" value="Pong"></p>
                    </form>`);
    counter++;
}

function formHandler(request, response) {
    const pingpong = request.body.pingpong;
    response.send(`<!DOCTYPE html>
                    <title>Ping Pong Challenge</title>
                    <p>Pong?</p>
                    <form action="/ping" method="POST">
                    <p>Count:  ${counter}</p>
                    <p><input type="submit" value="Ping"></p>
                    </form>`);
    counter++;
}
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', indexHandler);
app.post('/pong', formHandler);
app.post('/ping', indexHandler);

console.log('Runnin on http://localhost:8080/');
app.listen(8080);