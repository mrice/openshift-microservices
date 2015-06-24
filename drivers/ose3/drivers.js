var express = require('express');

// Constants
var PORT = 3001;

// App
var app = express();
app.get('/', function (req, res) {
    res.send('Driver service online\n');
});

app.post('/schedule', function (req, res) {
    //TODO: take some parameters to figure out something to do
    var driver = {};
    driver.name = "Pete";
    driver.eta = "26 min";
    res.send(JSON.stringify(driver) + '\n');
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
