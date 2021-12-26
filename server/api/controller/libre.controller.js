// 1 importo modelo
const Libre = require("../models/Libre"); 
// 2 importo fichero de http de utils
const HTTPSTATUSCODE = require("../utils/httpStatusCode"); 

// 3 creo los métoddos con sus funciones

const getAllEstilosLibres = async (req, res, next) =>{
    try{
        const libre = await Libre.find(); 
        return res.json({
            status: 200, 
            message: HTTPSTATUSCODE[200], 
            data: {libre: libre}
        }); 
       
    } catch(error){
        return next(error)
    }
}

const getEstiloLibreId = async(req, res, next) => {

    try{
        //le saco del path 
        const {libreId} = req.params; 
        const libreById = await Libre.findById(libreId); 
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { libre: libreById }
        }); 
        
    } catch(error){
        return next(error)
    }
}

//los exporto, las funciones 

module.exports = {
    getAllEstilosLibres, 
    getEstiloLibreId
}
