var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var actoresRouter = require('./views/actores');
var moviesRouter = require('./views/movies');
var cinesRouter = require('./views/cines');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/actores', actoresRouter);
app.use('/movies', moviesRouter);
app.use('/cines', cinesRouter)

module.exports = app;
