const controllerUser = require('../controller/user')
const request = require('../utils/request/service')

url = require("url")

const Cuser = (req, res, next) => {
    controllerUser.Cuser(req.body, res)
}

const Ruser = (req, res) => {
    controllerUser.Ruser(res)
}

const Uuser = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerUser.Uuser(query.id, req.body, res)
}

const Duser = (req, res) => {
    const query = url.parse(req.url, true).query
    console.log(query.id)
    controllerUser.Duser(query.id, res)
}
const AddRolUser = (req, res) =>{
    const query = url.parse(req.url, true).query
    controllerUser.AddRolUser(query.id, req.body, res)
}
const RroutsUser = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerUser.RroutsUser(query.id, res)
}

const LinkAmbulancia = (req, res) => controllerUser.LinkAmbulancia(request.Query(req,'idc'), request.Query(req,'idl'), res)

const RambulanciasByuser = (req, res) => controllerUser.RambulanciasByuser(request.Query(req,'idc'), res)

const LinkGpsUser = (req, res) => controllerUser.LinkGpsUser(request.Query(req,'idc'), request.Query(req,'idl'), res)

module.exports = {
    Cuser, Ruser, Uuser, Duser, AddRolUser, 
    RroutsUser, LinkAmbulancia, RambulanciasByuser,
    LinkGpsUser
}
