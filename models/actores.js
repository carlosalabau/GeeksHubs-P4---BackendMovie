const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

class Actor extends Sequelize.Model {}

Actor.init({
    nombre:{
        type: Sequelize.STRING
    },
    apellido:{
        type: Sequelize.STRING
    },
    peliculas_id:{
        type:Sequelize.NUMBER
    }
},
{
    sequelize,
    modelName: 'actor'
});

Actor.sync({ force: true }).then(() => {
    Actor.create({
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
  

  module.exports = Actor