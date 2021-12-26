// 1 importo modelo
const Mariposa = require("../models/Mariposa"); 
// 2 importo fichero de http de utils
const HTTPSTATUSCODE = require("../utils/httpStatusCode"); 

// 3 creo los métoddos con sus funciones

const getAllEstilosMariposa = async (req, res, next) =>{
    try{
        const mariposa = await Mariposa.find(); 
        return res.json({
            status: 200, 
            message: HTTPSTATUSCODE[200], 
            data: { mariposa: mariposa}
        }); 
       
    } catch(error){
        return next(error)
    }
}

const getEstiloMariposaId = async(req, res, next) => {

    try{
        //le saco del path 
        const {mariposaId} = req.params; 
        const mariposaById = await Mariposa.findById(mariposaId); 
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { mariposa: mariposaById }
        }); 
        
    } catch(error){
        return next(error)
    }
}

//los exporto, las funciones 

module.exports = {
    getAllEstilosMariposa, 
    getEstiloMariposaId
}
