controllerRol = require('../controller/roles.js')

const {onError} = require('../utils/error/errorHandler')

url = require("url")

const cRol = (req, res) =>{
    const {rol, error} = controllerRol.cRol(req.body)
    onError(res, rol, error)
}

const rRol = (req, res) =>{
    controllerRol.rRol(res)
}

const uRol = (req, res) =>{

    const query = url.parse(req.url, true).query
    console.log(query.id)
    controllerRol.uRol(query.id, req.body, res)
}

const dRol = (req, res)=>{
    const query = url.parse(req.url, true).query
    controllerRol.dRol(query.id, res)
}
const addRoutsRol = (req, res) =>{
    const query = url.parse(req.url, true).query
    controllerRol.uRol(query.id, req.body, res)
}

module.exports = {cRol, rRol, uRol, dRol, addRoutsRol}