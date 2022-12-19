const hospitalModel = require('../models/hospital')
const auto = require('../utils/auto/controller')

const Chospital = (body, res) => auto.create({
        "model" : hospitalModel,
        body,
        res
})

const RhospitalbyId = (id, res) => auto.find({
    "model" : hospitalModel,
    id,
    res
})

const UhospitalbyId = (id, body, res) => auto.Update({
    "model" : hospitalModel,
    body,
    id,
    res,
    "msg" : "hospital actualizado"
})

const Dhospital = (id, res) => auto.Delete({
    "model" : hospitalModel,
    id,
    res,
    "msg" : "hospital eliminado"
})

module.exports = {Chospital, RhospitalbyId, UhospitalbyId, Dhospital}