const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const faker = require('faker/locale/es');
const times = require("lodash.times");

class Producto extends Sequelize.Model {}

Producto.init({
    nombre:{
        type: Sequelize.STRING
    },
    material:{
        type: Sequelize.STRING
    },
    precio:{
        type:Sequelize.DOUBLE
    }
},
{
    sequelize,
    modelName: 'producto'
});

Producto.sync({ force: true })
.then( () => {
    Producto.bulkCreate(
        times(20, () => ({
            nombre: faker.commerce.productName(),
            material: faker.commerce.productMaterial(),
            precio: faker.commerce.price()
        })))
    })





/* .then(() => {
    Producto.create({
      nombre: 'Will',
      apellido: 'Smith',
      peliculas_id: 2,
    })
    
  }).then( () => {
    Actor.create({
        nombre: 'Brad',
        apellido: 'Pitt',
        peliculas_id: 1,
      });
  });
   */

  module.exports = Actor