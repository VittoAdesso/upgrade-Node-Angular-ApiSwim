const mongoose = require("mongoose"); 
const dotenv = require("dotenv"); 
dotenv.config(); 

//importamos el modelo de espalda, para nutri base de datos 
const Libre = require("../models/Libre");


// es mi array que debo ir construyendo
const libre = [{

    "title": "Libre",
    "img": "https://nadaconexceso.com/wp-content/uploads/2020/06/Estilo-libre-Crol-2-1.jpg",
    "description": "Se utiliza mucho para comenzar."
    // "video": ""

}]; 

// ahora creo función que me conecte la base de datos, verifica si ya exite lo reemplaza, y sino lo mete nuevo

mongoose.connect(process.env.MONGO_DB, { // LA CONECTO (LO IDEAL ES ASÍ!!!! )
//sino la forzo con su clave con el url completo de mongo
//en caso de que no me guarde los datos 

    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
            //conecta y busca los elementos creados
            const allLibre = await Libre.find(); 

            if(allLibre.length) { // si existe hace... 
                await Libre.collection.drop();  // drop es borrar 
                console.log("BD Created"); 
            }
    })
    .catch((err) => console.log("Borrando BD",err))
    .then((async() => {
            //ya revisada, y elminanda compelta, me inserta lo antiguo y lo nuevo del modelo que he creado e inyecta toooda mus semilla
            await Libre.insertMany(libre); 
            console.log("Estilos de libre insertados"); 

    }))
    
    .catch((err)=> console.log("No se ha podido insertar", err))
    .finally(() => mongoose.disconnect()); // ya cuando me haga todo que me desconecte 

// comprobar que ésto me lo haga bien 
// ABRO EN TERMINAL CARPETA SEEDS, Y PONGO === node nombreDearchivoSEMILLA.seed.js+ enter 