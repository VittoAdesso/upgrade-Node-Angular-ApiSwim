// 1 importo modelo
const Espalda = require("../models/Espalda"); 
// 2 importo fichero de http de utils
const HTTPSTATUSCODE = require("../utils/httpStatusCode"); 

// 3 creo los métoddos con sus funciones

const getAllEstilosEspalda = async (req, res, next) =>{
    try{
        const espalda = await Espalda.find(); 
        return res.json({
            status: 200, 
            message: HTTPSTATUSCODE[200], 
            data: {espalda: espalda}
        }); 
       
    } catch(error){
        return next(error)
    }
}

const getEstiloEspaldaId = async(req, res, next) => {

    try{
        //le saco del path 
        const {espaldaId} = req.params; 
        const espaldaById = await Espalda.findById(espaldaId); 
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { espalda: espaldaById }
        }); 
        
    } catch(error){
        return next(error)
    }
}

//los exporto, las funciones 

module.exports = {
    getAllEstilosEspalda, 
    getEstiloEspaldaId
}
