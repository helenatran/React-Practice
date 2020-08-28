const express = require('express');
const port = 4000;
const app = express();

let counter = 0;

app.get('/api/count', (req, res) => {
    res.json({ count: counter });
});

app.post('/api/increment', (req, res) => {
    counter++;
    res.json({ count: counter });
});

app.listen(port, () => console.log(`https://localhost:${port}`));