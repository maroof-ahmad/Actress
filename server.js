var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var actress = require('./app/routes/actress')();

// Just some options for the db connection
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

mongoose.connect('mongodb://<usename>:<password>@ds025399.mlab.com:25399/actress', options);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// Log with Morgan
app.use(morgan('dev'));

// parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

// Static files
app.use(express.static(__dirname + '/public'));

app.route('/actress')
    .post(actress.post)
    .get(actress.getAll);
app.route('/actress/:id')
    .get(actress.getOne);

app.listen(port);
console.log('listening on port ' + port);
