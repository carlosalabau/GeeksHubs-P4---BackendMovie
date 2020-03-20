const express = require('express');
const view = express.Router();
const Empresa = require('../models/empresas');
const sequelize = require('../models/sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

view.get('/', (req, res, next) => {
  Movie.findAll()
  .then( empresas => res.json(empresas))
  .catch( err => res.json({msn: err}))
});

view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Empresa.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(()=>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

view.get('/empresa/:nombre', (req, res, next) => {
  let _nombre =req.params.nombre;
  Empresa.findAll({where: {nombre: _nombre}})
  .then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

/* view.get('/tit/:titulo', (req, res, next) => {
  let _titulo = String(req.params.titulo);
  console.log(_titulo)
  Movie.findAll( {where: { titulo: { [Op.like]: '%'+_titulo+'%' } }})
  .then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
}); */

module.exports = view;