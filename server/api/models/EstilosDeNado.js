const mongoose = require("mongoose"); 

// mongoose nos facilita la vida esquemas de info, los uso siempre igual

const Schema = mongoose.Schema; 

// creo obj del esquema
// siempre con la inciial MAYÚSCULA
const EstilosDeNadoSchema = new Schema({

    title: { type: String, required: true}, // digo como es el tipo de dato y le digo que es obligatorio
    img: { type: String }, // digo como es el tipo de dato
    description: { type: String },  // digo como es el tipo de dato
    libre: [{type: Schema.Types.ObjectId, ref: "libre", required: true}], //par imprimnir datos masivos, me llama la ref a la const de cada modelo
    espalda: [{type: Schema.Types.ObjectId, ref: "espalda", required: true}], //opcional, para que me lea un array de objetos
    mariposa: [{type: Schema.Types.ObjectId, ref: "mariposa", required: true}],
}, 
{
    timestamps: true, // me ayuda a decirme cada vez que se ha creado
}

); 

const EstilosDeNado = mongoose.model("estilos", EstilosDeNadoSchema);  // "" referencia del path despuest del 3000, y depués lo que lleva lo que he pedido
module.exports = EstilosDeNado; // exporto con su referencia completa 