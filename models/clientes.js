const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const faker = require('faker/locale/es');
const times = require("lodash.times");

class Cliente extends Sequelize.Model {}

Cliente.init({
    nombre:{
        type: Sequelize.STRING
    },
    apellidos:{
        type: Sequelize.STRING
    },
    puesto:{
        type:Sequelize.STRING
    },
    direccion:{
        type:Sequelize.STRING
    },
    numero_movil:{
        type:Sequelize.NUMBER
    }
},
{
    sequelize,
    modelName: 'cliente'
});

Cliente.sync({ force: true })
.then( () => {
    Cliente.bulkCreate(
        times(30, () => ({
            nombre: faker.name.firstName(),
            apellidos: faker.name.lastName(),
            puesto: faker.name.jobArea(),
            direccion: faker.address.streetAddress(),
            numero_movil: faker.phone.phoneNumber()
        })))
    })




/* .then(() => {
    Cine.create({
      nombre: 'CINESA',
      provincia: 'Valencia',
      peliculas_id: 1
    })
    
  }).then( () => {
    Cine.create({
        nombre: 'Lys',
        provincia: 'Salamanca',
        peliculas_id: 2
      });
  })
  .then( ()=>{
      Cine.create({
          nombre: 'Aqua',
          provincia: 'Albacete',
          peliculas_id: 3
      })
  })
   */

  module.exports = Cliente