const express = require('express');
const view = express.Router();
const Producto = require('../models/productos');
const sequelize = require('../models/sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Listar todos los productos
view.get('/', (req, res, next) => {
  Producto.findAll()
  .then( productos => res.json(productos))
  .catch( err => res.json({msn: err}))
});

//Listar los productos por ID
view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Producto.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

// Listar los productos por precio
view.get('/precio/:precio', (req, res, next) => {
  let _precio = req.params.precio;
  Producto.findAll({ where: {precio: _precio} }).then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});
// Listar los productos con un precio mayor que X y ordenados de menor a mayor
view.get('/preciomayor/:precio', (req, res, next) => {
  let _precio = req.params.precio;
  Producto.findAll({ where: { precio: { [Op.gte]: _precio } }, order: [ ['precio', 'ASC'] ]})
  .then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});
// Listar los clientes que han comprado cada producto
view.get('/clientes/:id', (req, res, next) => {
  let _id = req.params.id;
  sequelize.query(`select productos.nombre as producto, clientes.nombre as cliente FROM productos,clientes where clientes.id = productos.clienteId AND clientes.id = ${_id}`)
  .then(project => {
   res.statusCode = 200;
   res.json(project);
 }).catch(err =>{
   res.statusCode = 400;
   res.json({status: 'KO', message: err})
 })
});

module.exports = view;
