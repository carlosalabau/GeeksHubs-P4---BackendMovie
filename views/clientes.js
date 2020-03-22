const express = require('express');
const view = express.Router();
const Cliente = require('../models/clientes');


view.get('/', (req, res, next) => {
  Cliente.findAll()
  .then( clientes => res.json(clientes))
  .catch( err => res.json({msn: err}))
});

view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Cliente.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(()=>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});
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

/* view.get('/nombre/:nombre', (req, res, next) => {
  let _nombre = req.params.nombre; 
 sequelize.query(`SELECT * FROM actors WHERE nombre = '${_nombre}'`).then(project => {
   res.statusCode = 200;
   res.json(project);
 }).catch(err =>{
   res.statusCode = 400;
   res.json({status: 'KO', message: err})
 })
}); */

module.exports = view;