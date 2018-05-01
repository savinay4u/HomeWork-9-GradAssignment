var http = require('http');
var fs = require('fs');
var wss = require('./websockets-server');
var mime = require('mime');

var handleError = function(err, res) {
  fs.readFile('./app/error.html', function(err, my) {
    res.end(my);
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
app.get('/',function($){
  $.redirect('index.html');
});

app.missing(function($){
  $.header('Content-Type', 'html/text');
  $.status('404','Page not found');
  fs.readFile(__direname+'/app/error.html',function(error,data){
    if(error){
      console.trace('Ohhh it is error here please check it', $.status,$.error.message);
    }
    $.end(my.toString());

  });
});
