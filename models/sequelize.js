const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/db.sqlite'
});
sequelize.authenticate()
.then(()=>{
  console.log('Conexion establecida con exito')
})
.catch(err =>{
  console.error('No se puede conectar con la base de datos', err)
});

module.exports = sequelize;