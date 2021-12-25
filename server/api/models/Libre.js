const mongoose = require("mongoose"); 
// mongoose nos facilita la vida esquemas de info, los uso siempre igual
const Schema = mongoose.Schema; 
// creo obj del esquema
// siempre con la inciial MAYÚSCULA
const LibreSchema = new Schema({

    title: { type: String, required: true}, // digo como es el tipo de dato y le digo que es obligatorio
    img: { type: String, required: true }, // digo como es el tipo de dato
    description: { type: String, required: true },  // digo como es el tipo de dato
    video: { type: String }, // digo como es el tipo de dato
}, 
{
    timestamps: true, // me ayuda a decirme cada vez que se ha creado
}

); 

const Libre = mongoose.model("libre", LibreSchema);  // "" referencia del path despuest del 3000, y depués lo que lleva lo que he pedido
module.exports = Libre; // exporto con su referencia completa 