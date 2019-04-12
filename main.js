const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRouter = require('./server/routes/todo');

const port = process.env.port || 4000;

app.use(bodyParser());

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  
});

app.use('/', todoRouter);

app.listen(port);