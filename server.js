// Dependencies
var express = require('express');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017'); // connect to our database
var bodyParser = require('body-parser')

var app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Router
app.use('/bear', require('./routes/bear'));


// Start
app.listen(1212);
console.log("Server start");
