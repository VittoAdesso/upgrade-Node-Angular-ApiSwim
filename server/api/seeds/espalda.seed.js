const mongoose = require("mongoose"); 
const dotenv = require("dotenv"); 
dotenv.config(); 

//importamos el modelo de espalda, para nutri base de datos 
const Espalda = require("../models/Espalda");


// es mi array que debo ir construyendo
const espalda = [{

    "title": "Espalda - crol de espalda",
    "img": "https://www.liveabout.com/thmb/xjBv_lCrXS9D4Sih0RDeAOYxYOw=/2119x1192/smart/filters:no_upscale()/GettyImages-519665498-5c6f88ff46e0fb0001076287.jpg",
    "description": "El estilo de natación de espalda es llamado también 'crol de espalda' debido a que en algún tiempo se le consideró una versión invertida del crol de frente. Efectivamente, las semejanzas entre ambos estilos son notables cuando se estudia detenidamente sus principios mecánicos. El crol de espalda es el tercer estilo más rápido, después de el crol y la mariposa. Aunque las tablas de récords señalan unas marcas, aparentemente, muy similares con respecto al estilo mariposa (50m. mariposa = 22.96 vs. 50m. espalda = 24.47), existe una diferencia de casi un segundo y medio a favor de la mariposa, lo cual representa demasiado tiempo si hablamos de alta competición, donde cada décima de segundo tiene mucha importancia."
    // "video": ""

}, 
{
    "title": "Básicos",
    "img": "https://www.swim-teach.com/images/backstroke-timing.jpg",
    "description": "Como en el crol de frente, el estilo espalda consiste en una acción alternativa de los brazos y de las piernas. Sin embargo, a diferencia del crol, los nadadores están sobre sus espaldas, en posición dorsal. Esto les obliga a realizar las brazadas con una trayectoria más lateral que por debajo del agua, como sucede en el crol."
    // "video": ""

},
{

    "title": "Movimientos a ejecutar",
    "img": "https://i.pinimg.com/736x/01/b9/f1/01b9f1d8b19cf5515ae63fa3eee357a1--swimming-rules-swimming-sport.jpg",
    "description": "Característica que comparte con el estilo crol es que el cuerpo gira a través de su eje longitudinal, excepto la cabeza que permanece fija; es lo que conoce como rolido pero en posición supina. El reglamento actual de natación exige que el nadador de espalda permanezca sobre su espalda mientras nada y no supere este giro o rolido más de 90 grados."
    // "video": ""

}, 
{
    "title": "Tips",
    "img": "https://content.artofmanliness.com/uploads/2016/06/Front-Crawl-Stroke-3.jpg",
    "description": "Es el único estilo en el que la cara nunca queda sumergida en el agua, excepto en los virajes y las salidas. Por este motivo, algunas publicaciones y/o autores sobre natación afirman que el ritmo respiratorio no es tan importante como en otros estilos. Sin embargo, el coordinar la respiración con los movimientos de brazos es fundamental, como en otros estilos, para que la fatiga surja lo más tarde posible."
    // "video": ""
}, 
{
    "title": "Músculos que trabajamos",
    "img": "https://i.ytimg.com/vi/OTBtx8dkstw/hqdefault.jpg",
    "description": "Pectoral, Tríceps, hombros, trapecio, , dorsales, abdomen."
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