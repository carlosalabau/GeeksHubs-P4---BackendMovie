const express = require('express');
const view = express.Router();
const Cine = require('../models/cines');
const sequelize = require('../models/sequelize');

view.get('/', (req, res, next) => {
  Cine.findAll()
  .then( Cines => res.json(Cines))
  .catch( err => res.json({msn: err}))
});

view.get('/provincia/:provincia', (req, res, next) => {
  let _provincia = req.params.provincia;
  Cine.findAll({ where: {provincia: _provincia} }).then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

view.get('/nombre/:nombre', (req, res, next) => {
  let _nombre = req.params.nombre;
  Cine.findAll({ where: {nombre: _nombre} }).then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

view.get('/estreno/:peliculas_id', (req, res, next) => {
  let pId = req.params.peliculas_id; 
  sequelize.query(`SELECT nombre FROM movies JOIN cines ON cines.peliculas_id = movies.id WHERE cines.peliculas_id = [${pId}]`)
  .then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});



module.exports = view;