const express = require('express');
const view = express.Router();
const Cliente = require('../models/clientes');
const Sequelize = require('sequelize');
const sequelize = require('../models/sequelize');
const Op = Sequelize.Op;

//Listar todos los clientes
view.get('/', (req, res, next) => {
  Cliente.findAll()
  .then( clientes => res.json(clientes))
  .catch( err => res.json({msn: err}))
});

//Listar clientes por ID
view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Cliente.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(()=>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

//Listar clientes por nombre exacto
view.get('/nombre/:nombre', (req, res, next) => {
   let _nombre = req.params.nombre; 
  Cliente.findAll({where: {nombre: _nombre}})
  .then(project => {
    res.statusCode = 200;
    res.json(project);
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

//Listar clientes por coincidencia de nombre
view.get('/nombres/:nombre', (req, res, next) => {
  let _nombre = String(req.params.nombre);
  Cliente.findAll( {where: { nombre: { [Op.like]: '%'+_nombre+'%' } }})
  .then(project => {
    res.json(project)
  }).catch(err =>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});

// Listar los nombres de cada cliente y la empresa a la que pertenece
view.get('/empresas/:id', (req, res, next) => {
  let _id = req.params.id;
  sequelize.query(`select Clientes.nombre as Cliente, empresas.nombre as Empresa FROM Clientes,empresas where Clientes.empresaId = empresas.id AND empresas.id = ${_id}`)
  .then(project => {
   res.statusCode = 200;
   res.json(project);
 }).catch(err =>{
   res.statusCode = 400;
   res.json({status: 'KO', message: err})
 })
});

module.exports = view;