const conductorModel = require('../models/conductor')
const auto = require('../utils/auto/controller')

const Cconductor = (body, res) => auto.create({
        "model" : conductorModel,
        body,
        res
})

const RconductorbyId = (id, res) => auto.find({
    "model" : conductorModel,
    id,
    res
})

const UconductorbyId = (id, body, res) => auto.Update({
    "model" : conductorModel,
    body,
    id,
    res,
    "msg" : "conductor actualizado"
})

const Dconductor = (id, res) => auto.Delete({
    "model" : conductorModel,
    id,
    res,
    "key" : "id_conductor",
    "msg" : "conductor eliminado"
})

const RambulanciasByuser = (id, res) => {
    
}

module.exports = {Cconductor, RconductorbyId, UconductorbyId, Dconductor}
