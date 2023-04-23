var express = require('express')
var app = express()

const port = 8801;

app.get('/', function(req, res) {
    (res.send("Isaac Radford!"))
});

var server = app.listen(port, function() {
    (console.log(`listening on port: ${port}`))
})