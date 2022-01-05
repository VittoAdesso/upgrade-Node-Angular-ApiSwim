const mongoose = require("mongoose"); 
const dotenv = require("dotenv"); 
dotenv.config(); 

//importamos el modelo de espalda, para nutri base de datos 
const Mariposa = require("../models/Mariposa");


// es mi array que debo ir construyendo
const mariposa = [

    {
    "title": "Mariposa",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNhvxr7TajRtLXLclOxx9AmJtxfFd91h1Hg&usqp=CAU",
    "description": "Es el estilo más moderno de todos, su aparición data de la década de los 50 y nace como una variante de la braza. Es uno de los más difíciles de aprender ya que exige altos niveles de fuerza y coordinación."
    // "video": ""
}, 
{
    "title": "Básicos",
    "img": "https://i.pinimg.com/originals/f4/46/34/f4463474dabb5f64e20dfe75659156f9.jpg",
    "description": "En este estilo el nadador se encuentra en posición ventral. Tanto los movimientos de las piernas como de brazos son muy similares a los realizados en el estilo crol pero de forma simultánea y con ligeras variaciones. Además, requiere una perfecta coordinación entre las extremidades superiores y las inferiores; éstas últimas realizan un movimiento similar al aleteo de los delfines, de ahí que también se le conozca como 'estilo delfín'."
    // "video": ""
}, 
{
    "title": "Movimientos a ejecutar",
    "img": "https://www.swim-teach.com/images/butterfly-body-movement.jpg",
    "description": "Por cada acción de brazos o brazada se realizan dos patadas: La primera patada hacia abajo se realiza cuando las manos salen del agua (facilita la salida de la cabeza y la recuperación de brazos) y la segunda patada hacia abajo se produce cuando las manos entran en el agua (para no perder velocidad). En este punto existen diferencias de opinión por parte de algunos autores, ya que unos afirman que la intensidad o esfuerzo de las dos patadas es exactamente igual, y que son las diferencias posturales del cuerpo la causa de que el primer golpe parezca más potente que el segundo. Por otro lado, están los que piensan que la primera patada es más fuerte que la segunda."
    // "video": ""
}, 
{
    "title": "Ténica del delfín",
    "img": "https://photos.cdn-outlet.com/photos/cms/guide/image/swimming/swimming_butterfly_01_300x350.jpg",
    "description": "Característica más llamativas de la mariposa es un movimiento ondulatoria del cuerpo, en forma de 'S' tumbada, de algún modo parecido al nado de los delfines, el cual resulta de la perfecta coordinación entre brazos, piernas y las diferentes posiciones del cuerpo. Tampoco este punto está exento de discusión ya que algunos autores dudan o afirman que dicha ondulación no existe y que es producto de un efecto visual. Y en parte tienen razón porque dicha ondulación sólo se describe como una trayectoria."
    // "video": ""
}, 
{
    "title": "Músculos que trabajamos",
    "img": "https://pbs.twimg.com/media/C68zU22WoAAVAJh.jpg",
    "description": "Dorsal ancho, deltoides, romboides, trapecio, ilicostal, recto abdominal, oblicuos, músculos paravertebrales"
    // "video": ""
}

]; 

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