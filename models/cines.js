const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
class Cine extends Sequelize.Model {}

Cine.init({
    nombre:{
        type: Sequelize.STRING
    },
    provincia:{
        type: Sequelize.STRING
    },
    peliculas_id:{
        type:Sequelize.STRING
    }
},
{
    sequelize,
    modelName: 'cine'
});

Cine.sync({ force: true }).then(() => {
    Cine.create({
      nombre: 'CINESA',
      provincia: 'Valencia',
      peliculas_id: '2',
    })
    
  }).then( () => {
    Cine.create({
        nombre: 'Lys',
        provincia: 'Salamanca',
        peliculas_id: ('1,3')
      });
  })
  

  module.exports = Cine