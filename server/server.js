//termino con  el archivo connect de la carpeta database y comienzo

//Imports == requiero express en una variable 
const express = require("express");
//Importamos la conexion a la db , aquí le llamo a la función creada en el otro arvhivo, por eso esa ruta o path
const { connect } = require("./api/utils/database/connect");

//5 importo las rutas o paths de la carpeta routes
const libre = require("./api/routes/libre.routes"); 
const mariposa = require("./api/routes/mariposa.routes"); 
const espalda = require("./api/routes/espalda.routes"); 

//Ejecutamos la funcion que conecta con la db
connect();

const app = express(); // app es igual a la ejecución de la libreria express 

// voy a configurar los headers, que es lo que quiero que me traiga la base de datos/api
//1
//Defino los headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  }); 

//2 confg cors para def direcciones que tendrán permisos de utilización de la API swim
const cors = require("cors"); 

//quiero que mi app use
app.use( cors()); 

//3 necesito configuarar express para tener datos tipo json 
app.use(express.json()); // convierte en json
app.use(express.urlencoded({ extended : true})); // me codifica url

// Define PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})



// 4 le digo a morgan que me muestre en insomnia o postman las urls que le muestro
const logger = require("morgan"); // escucha activa de mi api
app.use(logger("dev"));  //aquí le llamo

//6 defino las rutas del paso 5
app.use("/libre", libre); 
app.use("/espalda", espalda); 
app.use("/mariposa", mariposa); 

// 7 defino y llamo un js que tiene todas las rutas posibles existentes
const HTTPSTATUSCODE = require("./api/utils/httpStatusCode"); 

app.use((req, res, next) =>{
    let err = new Error(); 
    err.status = 404; 
    err.message = HTTPSTATUSCODE[404]; // ME IMPRIME LOS MENSAJES 
    next(err); 
}); 


//8 creo la función que nos ayuda a recibir y devolver en json el resultado
app.use((err, req, res, next) =>{
    return res.status(err.status || 500).json(err.message || "Error inesperado"); 
}); 

//9 para ocultar con qué se ha realizado la API, protocolo de seguridad
app.disable("x-powered-by"); 

//Escuchamos el server en el puerto 3000 y le indicamos que nos muestre un mensaje por consola , puerto genérico
app.listen(3000, () => {
    console.log("Node server listening on port 3000");
});

// ahora me voy al archivo .env 
// .env debemos definirla 