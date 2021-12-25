// Necesito conectarme a una base de datos del back
// varios pasos son siempre los mismos... 

// 1 creo const que contenga el requerir dotenv para acceder a las variables de entorno
const dotenv = require("dotenv");
dotenv.config(); 
// 2 creo const que contenga el requerir mongoose para comunicarnos con la bd
const mongoose = require("mongoose");

//3 guardamos la url de Mongo en una variable ya que es más seguro
const mongoDb = process.env.MONGO_DB;


//4 Configuramos la función connect en un try catch para controlar los errores == siempre igual
const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const { name, host } = db.connection;
        console.log(`Connected with db: ${name}, in host: ${host}`);
    } catch (error) {
        console.log("Error to connect with BD", error);
    }
};
//5 exportamos la funcion connect para que sea llamada 
module.exports = { connect };

//6 termino aquí y me voy al archivo server.js