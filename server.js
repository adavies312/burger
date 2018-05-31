
var express = require('express');
var bodyParser = require ('body-parser');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sets up Handlebars Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Express.static serves static content from the public directory 
app.use(express.static(__dirname + '/public'));

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  