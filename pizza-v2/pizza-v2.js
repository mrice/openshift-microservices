var express = require('express');
var http = require('http');

// Constants
var PORT = 3003;

var driverServiceHost = process.env.DRIVER_SERVICE_HOST
var driverServicePort = 3001

// App
var app = express();
app.get('/', function (req, res) {
    res.send('Pizza service online - v2\n');
});

app.post('/order', function (req, res) {
    //TODO: take some parameters to figure out something to do
    
    var options = {
      host: driverServiceHost,
      port: driverServicePort,
      path: '/schedule',
      method: 'POST'
    };

    console.log(JSON.stringify(options));
    http.request(options, function(driverRes) {
        driverRes.setEncoding('utf8');
        driverRes.on('data', function (data) {

            var driver = JSON.parse(data); //assumes we're getting everything on this chunk
            
            var pizza = {};
            pizza.name = "Spicy Sicilian";
            pizza.driver = driver;
            res.send(JSON.stringify(pizza) + '\n');
        });
    }).end();

});

app.listen(PORT);
console.log("---[ environment variables ]---");
console.log(JSON.stringify(process.env));
console.log("-------------------------------");
console.log('Running pizza services (v2) on http://localhost:' + PORT);
console.log('Will connect to drivers at ' + driverServiceHost + ':' + driverServicePort);
