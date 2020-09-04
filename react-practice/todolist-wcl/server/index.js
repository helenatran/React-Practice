const express = require('express');
const port = 4000;
const app = express();

let todos = [];

app.get('/api/list', (req, res) => {
    res.json({ todos: todos });
});

app.post('/api/add', (req, res) => {
    todos = req.body.todos;
    res.json({ todos: todos });
});

app.listen(port, () => console.log(`http://localhost:${port}`));