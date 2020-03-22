var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var empresasRouter = require('./views/empresas');
var clientesRouter = require('./views/clientes');
var productosRouter = require('./views/productos');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/empresas', empresasRouter);
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

module.exports = app;
