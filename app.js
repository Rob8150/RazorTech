var express = require('express');
var db = require('./model/db')
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var route1 = require('./routes/accounts');
var route2 = require('./routes/calls');
var route3 = require('./routes/Campaigns');
var route4 = require('./routes/cases');
var route5 = require('./routes/Catalogs');
var route6 = require('./routes/contact');
var route7 = require('./routes/events');
var route8 = require('./routes/Invoices');
var route9 = require('./routes/Leads');
var route10 = require('./routes/Opportunites');
var route11 = require('./routes/Products');
var route12 = require('./routes/ProductLists');
var route13 = require('./routes/PurchaseOrders');
var route14 = require('./routes/Quotes');
var route15 = require('./routes/SalesOrders');
var route16 = require('./routes/Solutions');
var route17 = require('./routes/Tasks');
var route18 = require('./routes/Vendors');
var route22 = require('./routes/Register');


var users = require('./routes/users');
var app = express();

var corsOptions = {
  origin: 'http://localhost'
  //origin: 'http://www.nodefork.com'
};

//Gobal Enable weak sequrity
app.use(cors(corsOptions)); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/v1', route1);
app.use('/v1', route2);
app.use('/v1', route3);
app.use('/v1', route4);
app.use('/v1', route5);
app.use('/v1', route6);
app.use('/v1', route7);
app.use('/v1', route8);
app.use('/v1', route9);
app.use('/v1', route10);
app.use('/v1', route11);
app.use('/v1', route12);
app.use('/v1', route13);
app.use('/v1', route14);
app.use('/v1', route15);
app.use('/v1', route16);
app.use('/v1', route17);
app.use('/v1', route18);
app.use('/v1_cgx', route22);
app.use('/users', users);

// app.use(function(request, response, next) {
//     var user = auth(request);   
//     if (user === undefined) {
//     console.log('User information is not available in the request');
//         response.statusCode = 401;
//         response.setHeader('WWW-Authenticate', 'Basic');
//         response.end('Unauthorized');
//     } else {
//     //authenticate(user, response, next);
//       console.log(request);
//     }
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
