var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(7777, function() {
    console.log('Express server is up on port 7777');
});
