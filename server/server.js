//termino con  el archivo connect de la carpeta database y comienzo

//Imports == requiero express en una variable 
const express = require("express");
//Importamos la conexion a la db , aquí le llamo a la función creada en el otro arvhivo, por eso esa ruta o path
const { connect } = require("./api/utils/database/connect");

//Ejecutamos la funcion que conecta con la db
connect();

const app = express(); // app es igual a la ejecución de la libreria express 

//Escuchamos el server en el puerto 3000 y le indicamos que nos muestre un mensaje por consola , puerto genérico

app.listen(3000, () => {
    console.log("Node server listening on port 3000");
});

// ahora me voy al archivo .env 
// .env debemos definirla 