// creo las rutas del http, los paths 

//importo express
const express = require("express"); 
//guardo función express.Router en var router, para poder usarla 
const router = express.Router();

//importo las funciones que crearé
const { getAllEstilosLibres, getEstiloLibreId} = require("../controller/libre.controller"); 

//definimos métodos y método del controlador con las rutas (revisa carpeta controller)
router.get("/", getAllEstilosLibres); 
router.get("/:libreId", getEstiloLibreId); 

//se debe exportar el router siempre
module.exports = router; 