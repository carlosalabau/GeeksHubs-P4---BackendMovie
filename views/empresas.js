const express = require('express');
const view = express.Router();
const Empresa = require('../models/empresas');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Listar todas las empresas
view.get('/', (req, res, next) => {
  Empresa.findAll()
  .then( empresas => res.json(empresas))
  .catch( err => res.json({msn: err}))
});
// Listar las empresas por ID
view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Empresa.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(()=>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});
//Listar las empresas por nombre
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
//Listar las empresas por coincidencia de nombre
view.get('/empresas/:nombre', (req, res, next) => {
  let _nombre = String(req.params.nombre);
  Empresa.findAll( {where: { nombre: { [Op.like]: '%'+_nombre+'%' } }})
  .then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});
module.exports = view;


