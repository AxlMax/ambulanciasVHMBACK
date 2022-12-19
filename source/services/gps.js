const controllergps = require('../controller/gps')
const request = require('../utils/request/service')

const Cgps = (req, res) => controllergps.Cgps(req.body, res)

const RgpsbyId = (req, res) => controllergps.RgpsbyId(request.Query(req,'id'), res)

const UgpsbyId = (req, res) => controllergps.UgpsbyId(request.Query(req,'id'), req.body, res)

const Dgps = (req, res) => controllergps.Dgps(request.Query(req,'id'), res)

module.exports = {Cgps, RgpsbyId, UgpsbyId, Dgps}