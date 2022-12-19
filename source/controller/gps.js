const gpsModel = require('../models/gps')
const auto = require('../utils/auto/controller')

const Cgps = (body, res) => auto.create({
        "model" : gpsModel,
        body,
        res
})

const RgpsbyId = (id, res) => auto.find({
    "model" : gpsModel,
    id,
    res
})

const UgpsbyId = (id, body, res) => auto.Update({
    "model" : gpsModel,
    body,
    id,
    res,
    "msg" : "gps actualizado"
})

const Dgps = (id, res) => auto.Delete({
    "model" : gpsModel,
    id,
    res,
    "msg" : "gps eliminado"
})

module.exports = {Cgps, RgpsbyId, UgpsbyId, Dgps}
