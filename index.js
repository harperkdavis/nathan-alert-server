const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

let status = false;

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
});


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