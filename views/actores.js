const express = require('express');
const view = express.Router();
const Actor = require('../models/actores');
const sequelize = require('../models/sequelize');


view.get('/', (req, res, next) => {
  Actor.findAll()
  .then( actores => res.json(actores))
  .catch( err => res.json({msn: err}))
});

view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Actor.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(()=>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});
view.get('/pelicula/:peliculas_id', (req, res, next) => {
   let _pId = req.params.peliculas_id; 
  sequelize.query("SELECT * FROM actors WHERE peliculas_id ="+ _pId).then(project => {
    res.statusCode = 200;
    res.json(project);
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

view.get('/nombre/:nombre', (req, res, next) => {
  let _nombre = req.params.nombre; 
 sequelize.query(`SELECT * FROM actors WHERE nombre = '${_nombre}'`).then(project => {
   res.statusCode = 200;
   res.json(project);
 }).catch(err =>{
   res.statusCode = 400;
   res.json({status: 'KO', message: err})
 })
});

module.exports = view;