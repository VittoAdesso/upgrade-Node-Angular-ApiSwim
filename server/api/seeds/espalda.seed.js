const mongoose = require("mongoose"); 
const dotenv = require("dotenv"); 
dotenv.config(); 

//importamos el modelo de espalda, para nutri base de datos 
const Espalda = require("../models/Espalda");


// es mi array que debo ir construyendo
const espalda = [{

    "title": "Espalda",
    "img": "https://rdv-files.nyc3.cdn.digitaloceanspaces.com/pub/html/files_html/3/4/6/000803461.png",
    "description": "Nado de espalda principal"
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
            const allEspalda = await Espalda.find(); 

            if(allEspalda.length) { // si existe hace... 
                await Espalda.collection.drop();  // drop es borrar 
                console.log("BD Created"); 
            }
    })
    .catch((err) => console.log("Borrando BD",err))
    .then((async() => {
            //ya revisada, y elminanda compelta, me inserta lo antiguo y lo nuevo del modelo que he creado e inyecta toooda mus semilla
            await Espalda.insertMany(espalda); 
            console.log("Estilos de espalda insertados"); 

    }))
    
    .catch((err)=> console.log("No se ha podido insertar", err))
    .finally(() => mongoose.disconnect()); // ya cuando me haga todo que me desconecte 

// comprobar que ésto me lo haga bien 
// ABRO EN TERMINAL CARPETA SEEDS, Y PONGO === node + nombreDearchivoSEMILLA.seed.js+ enter 

// Recuerda que puedo inyectarla manualmente