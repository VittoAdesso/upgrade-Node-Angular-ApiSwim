// creo las rutas del http, los paths 

//importo express
const express = require("express"); 
//guardo función express.Router en var router, para poder usarla 
const router = express.Router();

//importo las funciones que crearé
const { getAllEstilosMariposa, getEstiloMariposaId} = require("../controller/mariposa.controller"); 

//definimos métodos y método del controlador con las rutas (revisa carpeta controller)
router.get("/", getAllEstilosMariposa); 
router.get("/:libreId", getEstiloMariposaId)

//se debe exportar el router siempre
module.exports = router; 