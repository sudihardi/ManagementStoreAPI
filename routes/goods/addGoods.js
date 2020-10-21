const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../middleware/authenticationMiddleware')

app.use(authentication)

app.post("/goods", (req, res) => {
    const body = req.body;
    const result = db.add('goods', body);
    res.send(result);
    return;
});

module.exports = app