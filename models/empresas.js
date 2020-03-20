const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const faker = require('faker/locale/es');
const times = require("lodash.times");

class Empresa extends Sequelize.Model {}

Empresa.init({
    nombre: {
        type: Sequelize.STRING
    },
    ciudad: {
        type: Sequelize.STRING
    },
    pais: {
        type: Sequelize.STRING
    }
},
{
    sequelize,
    modelName: 'empresa'
});

Empresa.sync({ force: true })
.then( () => {
    Empresa.bulkCreate(
        times(10, () => ({
            nombre: faker.company.companyName(),
            ciudad: faker.address.city(),
            pais: faker.address.country()
        })))
    })



/* .then(() => {
    Movie.create({
      titulo: 'Bad Boys for life',
      descripcion: 'Miami vuelve a ser el escenario de esta nueva entrega de Dos policías rebeldes. Allí, los detectives Mike Lowrey (Will Smith) y Marcus Burnett (Martin Lawrence) vuelven a hacer de las suyas, y su nueva aventura volverá a estar plagada de acción, bandas, persecuciones de coches y explosiones.',
      isEstreno: 1,
      actor_id: 2,
      cines_id: 1
    })
    
  }).then( () => {
    Movie.create({
        titulo: '1917',
        descripcion: 'Primera Guerra Mundial. A dos jóvenes soldados británicos les encomiendan una misión imposible: deben entregar un mensaje, en una carrera contrareloj, atravesando territorio enemigo',
        actor_id: ('1,4'),
        isEstreno: 0,
        actor_id: 1,
        cines_id: 3
      });
  })
   */

  module.exports = Empresa