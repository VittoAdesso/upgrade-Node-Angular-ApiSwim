const mongoose = require("mongoose"); 
const dotenv = require("dotenv"); 
dotenv.config(); 

//importamos el modelo de espalda, para nutri base de datos 
const Mariposa = require("../models/Mariposa");


// es mi array que debo ir construyendo
const mariposa = [{

    "title": "Mariposa",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNhvxr7TajRtLXLclOxx9AmJtxfFd91h1Hg&usqp=CAU",
    "description": "Uno de los estilos más completos que existen"
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
            const allMariposa = await Mariposa.find(); 

            if(allMariposa.length) { // si existe hace... 
                await Mariposa.collection.drop();  // drop es borrar 
                console.log("BD Created"); 
            }
    })
    .catch((err) => console.log("Borrando BD",err))
    .then((async() => {
            //ya revisada, y elminanda compelta, me inserta lo antiguo y lo nuevo del modelo que he creado e inyecta toooda mus semilla
            await Mariposa.insertMany(mariposa); 
            console.log("Estilos de mariposa insertados"); 

    }))
    
    .catch((err)=> console.log("No se ha podido insertar", err))
    .finally(() => mongoose.disconnect()); // ya cuando me haga todo que me desconecte 

// comprobar que ésto me lo haga bien 
// ABRO EN TERMINAL CARPETA SEEDS, Y PONGO === node nombreDearchivoSEMILLA.seed.js+ enter 