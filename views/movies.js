const express = require('express');
const view = express.Router();
const Movie = require('../models/movies');
const sequelize = require('../models/sequelize');

view.get('/', (req, res, next) => {
  Movie.findAll()
  .then( movies => res.json(movies))
  .catch( err => res.json({msn: err}))
});

view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Movie.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(()=>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

view.get('/titulo/:titulo', (req, res, next) => {
  let _titulo =req.params.titulo;
  sequelize.query("SELECT * FROM movies WHERE titulo =" + _titulo).then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

view.get('/tit', (req, res, next) => {
  let _titulo = String(req.query.titulo);
  sequelize.query(`SELECT * FROM movies WHERE titulo LIKE '%${_titulo}%'`).then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

module.exports = view;