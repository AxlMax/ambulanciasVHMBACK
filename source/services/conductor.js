const controllerConductor = require('../controller/conductor')
const request = require('../utils/request/service')

const Cconductor = (req, res) => controllerConductor.Cconductor(req.body, res)

const RconductorbyId = (req, res) => controllerConductor.RconductorbyId(request.Query(req,'id'), res)

const UconductorbyId = (req, res) => controllerConductor.UconductorbyId(request.Query(req,'id'), req.body, res)

const Dconductor = (req, res) => controllerConductor.Dconductor(request.Query(req,'id'), res)

module.exports = {Cconductor, RconductorbyId, UconductorbyId, Dconductor}