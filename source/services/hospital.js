const controllerhospital = require('../controller/hospital')
const request = require('../utils/request/service')

const Chospital = (req, res) => controllerhospital.Chospital(req.body, res)

const RhospitalbyId = (req, res) => controllerhospital.RhospitalbyId(request.Query(req,'id'), res)

const UhospitalbyId = (req, res) => controllerhospital.UhospitalbyId(request.Query(req,'id'), req.body, res)

const Dhospital = (req, res) => controllerhospital.Dhospital(request.Query(req,'id'), res)

module.exports = {Chospital, RhospitalbyId, UhospitalbyId, Dhospital}