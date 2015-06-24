var express = require('express');

// Constants
var PORT = 3002;

// App
var app = express();
app.get('/', function (req, res) {
    res.send('Pizza service online\n');
});

app.post('/order', function (req, res) {
    //TODO: take some parameters to figure out something to do
    var pizza = {};
    pizza.name = "Pesto Pie";
    res.send(JSON.stringify(pizza) + '\n');
});


app.listen(PORT);
console.log('Running pizza services on http://localhost:' + PORT);
