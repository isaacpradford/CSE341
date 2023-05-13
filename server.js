var express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('./db/connect')
var app = express();

// const dotenv = require('dotenv').config();

const port = process.env.PORT || 8801;

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      })
      .use('/', require('./routes'));


mongodb.initializeDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {    
        app.listen(port);
        console.log(`listening on port: ${port}`)
    }
});
