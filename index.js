const express = require('express');
const app = express();
const port = 3000;

let status = false;

app.get('/status', (req, res) => {
    res.send(status ? "clear" : "not clear");
});

app.post("/update", (req, res) => {
    if (req.body['type'] === 'swap') {
        status = !status;
    } else if (req.body['type'] === 'spam') {
        status = false;
    }
    res.send(status);
});

app.listen(port, () => {
    console.log('Nathan alerter running at http://localhost:3000');
});