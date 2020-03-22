const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const faker = require('faker/locale/es');
const times = require("lodash.times");
const Cliente = require('./clientes');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const Producto = sequelize.define('Producto',{
    nombre:{
        type: Sequelize.STRING
    },
    material:{
        type: Sequelize.STRING
    },
    precio:{
        type:Sequelize.NUMBER
    }
})

Cliente.hasMany(Producto);
Producto.belongsTo(Cliente);

Producto.sync({ force: true })
.then( () => {
    Producto.bulkCreate(
        times(20, () => ({
            nombre: faker.commerce.productName(),
            material: faker.commerce.productMaterial(),
            precio: faker.commerce.price(),
            ClienteId: getRandomInt(1,30)
        })))
    })

    module.exports = Producto;



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

 