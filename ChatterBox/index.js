var http = require('http');
var fs = require('fs');
var wss = require('./websockets-server');
/*---------------Silver Challenge-------*/
var mime = require('mime');
/*---------------Silver Challenge-------*/

var handleError = function(err, res) {
  fs.readFile('./app/error.html', function(err, data) {
    res.end(data);
  });
};

;
// Setup server;
var server = require('diet'); //Require diet
var app = server(); // Create Server Instance
app.listen('http://localhost:8000'); // Listen on localhost port 80

// Require the diet-static module and configure it
var static = require('diet-static')({
  path: app.path + '/app/'
});

// Attach the static module as a footer middleware
app.footer(static);

// This is a working static file server
// anything you put in ../yourProject/static/
// will be served as a file when requested
// for example: to load an image from "../~yourProject/static/cat.png"
// you can send a GET request to "http://localhost/cat.png"
