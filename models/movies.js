const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
class Movie extends Sequelize.Model {}

Movie.init({
    titulo:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    actor_id:{
        type:Sequelize.STRING
    },
    cines_estreno:{
        type: Sequelize.STRING
    }
},
{
    sequelize,
    modelName: 'movie'
});

Movie.sync({ force: true }).then(() => {
    Movie.create({
      titulo: 'Bad Boys for life',
      descripcion: 'Miami vuelve a ser el escenario de esta nueva entrega de Dos policías rebeldes. Allí, los detectives Mike Lowrey (Will Smith) y Marcus Burnett (Martin Lawrence) vuelven a hacer de las suyas, y su nueva aventura volverá a estar plagada de acción, bandas, persecuciones de coches y explosiones.',
      actor_id: ('2,3'),
      cines_estreno: ('2,3')
    })
    
  }).then( () => {
    Movie.create({
        titulo: '1917',
        descripcion: 'Primera Guerra Mundial. A dos jóvenes soldados británicos les encomiendan una misión imposible: deben entregar un mensaje, en una carrera contrareloj, atravesando territorio enemigo',
        actor_id: ('1,4'),
        cines_estreno: ('1,2')
      });
  })
  

  module.exports = Movie