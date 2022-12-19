const controllerAmbulancia = require('../controller/ambulancia')
const request = require('../utils/request/service')

const Cambulancia       = (req, res) => controllerAmbulancia.Cambulancia(req.body, res)
const RambulanciabyId   = (req, res) => controllerAmbulancia.RambulanciabyId(request.Query(req,'id'), res)
const UambulanciabyId   = (req, res) => controllerAmbulancia.UambulanciabyId(request.Query(req,'id'), req.body, res)
const Dambulancia       = (req, res) => controllerAmbulancia.Dambulancia(request.Query(req,'id'), res)
const linkHospital      = (req, res) => controllerAmbulancia.linkHospital(request.Query(req,'idc'), request.Query(req,'idl'), res)
const linkConductor     = (req, res) => controllerAmbulancia.linkConductor(request.Query(req,'idc'), request.Query(req,'idl'), res)
const linkGps           = (req, res) => controllerAmbulancia.linkGps(request.Query(req,'idc'), request.Query(req,'idl'), res)
const RgpsByambulancia  = (req, res) => controllerAmbulancia.RgpsByambulancia(request.Query(req,'idc'), res)

module.exports = {
    Cambulancia, RambulanciabyId, UambulanciabyId, 
    Dambulancia, linkHospital, linkConductor, linkGps,
    RgpsByambulancia
}