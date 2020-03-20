const express = require('express');
const view = express.Router();
const Producto = require('../models/productos');
const sequelize = require('../models/sequelize');

view.get('/', (req, res, next) => {
  Producto.findAll()
  .then( productos => res.json(productos))
  .catch( err => res.json({msn: err}))
});

view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Producto.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

view.get('/precio/:precio', (req, res, next) => {
  let _precio = req.params.precio;
  Producto.findAll({ where: {precio: _precio} }).then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

/* view.get('/estreno/:peliculas_id', (req, res, next) => {
  let pId = req.params.peliculas_id; 
  sequelize.query(`SELECT nombre FROM movies JOIN cines ON cines.peliculas_id = movies.id WHERE cines.peliculas_id = [${pId}]`)
  .then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
}); */



module.exports = view;