const mongoose = require("mongoose"); 
const dotenv = require("dotenv"); 
dotenv.config(); 

//importamos el modelo de espalda, para nutri base de datos 
const Libre = require("../models/Libre");


// es mi array que debo ir construyendo
const libre = [{

    "title": "Libre",
    "img": "https://cdn2.coachmag.co.uk/sites/coachmag/files/images/dir_32/mens_fitness_16162.jpg",
    "description": "Se trata del estilo con una velocidad media de nado más rápido (al menos de momento), debido a la acción alternativa y constante de piernas y brazos, lo que produce una continuidad en la propulsión. Sin embargo, el estilo de mariposa en algunos momentos de su ciclo puede alcanzar velocidades puntas superiores a las del estilo crol."
    // "video": ""

}, 
{
    "title": "Básicos",
    "img": "https://i.pinimg.com/originals/a3/bf/df/a3bfdfbfac3d78bbfcec4df2abc148b1.jpg",
    "description": "En el crol, los nadadores utilizan una acción de brazos y un batido de pies alternativo. Un ciclo completo de este estilo se compone de una acción completa del brazo derecho, una completa del izquierdo y de un número variable de batidos de piernas."
    // "video": ""

},
{

    "title": "Movimientos a ejecutar",
    "img": "https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs12984-020-00682-6/MediaObjects/12984_2020_682_Fig5_HTML.png",
    "description": "El movimiento de los brazos es alternativo y mientras uno de ellos se mueve hacia adelante por el aire con la mano dispuesta a entrar en el agua, y el codo relajado, el otro brazo se mueve avanzando bajo el agua en sentido contrario al otro brazo. El movimiento de piernas también se denomina 'patada oscilante' y consiste en un movimientos alternativo de las piernas que parte de la cadera, en un movimiento de arriba y abajo, con las piernas relajadas, los pies hacia adentro y los dedos de punta."
    // "video": ""

}, 
{
    "title": "Tips",
    "img": "https://content.artofmanliness.com/uploads/2016/06/Front-Crawl-Stroke-3.jpg",
    "description": "Se utilizan distintos ritmos en la acción de piernas con respecto a la coordinación entre brazos y piernas, según el nadador y la distancia a realizar. Los batidos de pies que prevalecen son el de 6, el de 4 y el de 2 batidos. Así, los nadadores de larga distancia suelen realizar 4 o 2 batidos y los de velocidad 6."
    // "video": ""
}, 
{
    "title": "Músculos que trabajamos",
    "img": "https://i.ytimg.com/vi/OTBtx8dkstw/hqdefault.jpg",
    "description": "Bícpes, Tríceps, hombros, trapecio, glúteos, quadricéps, gemelos, femoral, dorsales, abdomen."
    // "video": ""
}

]; 

// ahora creo función que me conecte la base de datos, verifica si ya exite lo reemplaza, y sino lo mete nuevo

mongoose.connect(process.env.MONGO_DB,
    // LA CONECTO (LO IDEAL ES ASÍ!!!! )
//sino la forzo con su clave con el url completo de mongo
//en caso de que no me guarde los datos 
{
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