# GeeksHubs-P4---BackendMovie

## Introduction

> API REST construida para realizar consultas en la base de datos.  
Tenemos 3 tablas: empresas, clientes, productos. Donde una empresa tiene muchos clientes y un cliente solo puede comprar un producto.  
Vamos a buscar a través de los endpoints los id de cada tabla, el nombre literal y por coincidencia y el producto que ha comprado cada cliente asi como los clientes que pertenecen a cada empresa.


## Code Samples

#### Aquí os muestro un ejemplo de endpoint para listar el ID de cada cliente.
~~~
view.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Cliente.findAll({ where: {id: _id} }).then(project => {
    res.json(project)
  }).catch(()=>{
    res.statusCode = 400;
    res.json({status: 'KO', message: err})
  })
});  
~~~  
#### Y aqui un ejemplo para construir la relacion de uno a muchos.
~~~
Empresa.hasMany(Cliente);
Cliente.belongsTo(Empresa);
~~~
#### Para poder buscar la informacion de cada cliente por ID usaremos la siguiente ruta:
~~~
localhost:3000/clientes/'id'
~~~
#### Para buscar por nombre:
~~~
localhost:3000/clientes/nombre/'nombre del cliente'
~~~


## Installation

#### Para este proyecto hemos usado dependencias npm como:  
* express-generator
* sequelize
* sqlite
* node

#### Lo primero que tienes que hacer es clonar el proyecto en una carpeta de tu equipo:
~~~
git clone https://github.com/carlosalabau/GeeksHubs-P4---BackendMovie.git
~~~
####  Para instalar las dependencias usaremos el siguiente comando: 
~~~
npm install express-generator sequelize sqlite3  
~~~  
#### Una vez lo tengas todo listo tendras que iniciar el servidor para que se genere la base de datos, con el siguiente comando:
~~~
npm start
~~~
 #### Como opcional puedes descargarte la aplicacion **Postman**, para poder hacer consultas a la API. Ten en cuenta que los datos los recibe en JSON.