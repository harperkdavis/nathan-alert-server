const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let status = false;

app.get('/status', (req, res) => {
    res.send({'clear': status});
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
    console.log('Nathan alerter running!');
});