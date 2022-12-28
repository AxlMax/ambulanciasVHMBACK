const ambulanciaModel = require('../models/ambulancia')
const gpsModel = require("../models/gps")
const auto = require('../utils/auto/controller')
const Error = require('../utils/error/errorHandler')

const ErrorMSG = "error CONTROLADOR"

const Cambulancia = (body, res) => auto.create({
    "model" : ambulanciaModel,
    body,
    res
})

const RambulanciabyId = (id, res) => {
    
    ambulanciaModel.findById(id,(err, doc) => {
        if(err){
            res.status(400).send("error CONTROLADOR")
        }else{
            res.status(200).send(doc)
        }
    })
}

const UambulanciabyId = (id, body, res) => {
    ambulanciaModel.findByIdAndUpdate(id, {$set : body}, (error, doc) => {
        if(error){
            console.log(error)
            res.status(400).send("error CONTROLADOR")
        }else{
            res.status(200).send("ambulancia actualizada")
        }
    })
}

const Dambulancia = (id, res) => auto.Delete({
    "model" : ambulanciaModel,
    id,
    res,
    "key" : "id_ambulancia",
    "msg" : "ambulancia eliminada"
})

const linkHospital = (idc, idl, res) => auto.Link({
    "model" : ambulanciaModel, 
    idc, idl, 
    "key" : "id_hospital",
    res
})

const linkConductor = (idc, idl, res) => auto.Link({
    "model" : ambulanciaModel, 
    idc, idl, 
    "key" : "id_conductor",
    res
})

const linkGps = (idc, idl, res) => auto.Link({
    "model" : ambulanciaModel, 
    idc, idl, 
    "key" : "id_gps",
    res
})

const RgpsByambulancia = (idc, res) => auto.Rlink({
    idc,
    "modelc" : ambulanciaModel,
    "keyc"   : "id_gps",
    "modell" : gpsModel,
    res
})

module.exports = {
    Cambulancia, RambulanciabyId, UambulanciabyId, 
    Dambulancia, linkHospital, linkConductor, linkGps,
    RgpsByambulancia
}