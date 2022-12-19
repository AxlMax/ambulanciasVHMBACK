controllerRoutersRoles = require('../controller/routersRoles.js')

const {onError} = require('../utils/error/errorHandler')

 url = require("url")

 const cRoutersRoles = (req, res)=>{
   const {rout, error} = controllerRoutersRoles.cRoutersRoles(req.body)
    onError(res, rout, error)
 }

 const rRoutersRoles = (req, res)=>{
    controllerRoutersRoles.rRoutersRoles(res)

 }
 
 const uRoutersRoles = (req, res) => {
   const query = url.parse(req.url, true).query
    controllerRoutersRoles.uRoutersRoles(query.id, req.body, res)
 }

const dRoutersRoles = (req, res) => {
   const query = url.parse(req.url, true).query
    controllerRoutersRoles.dRoutersRoles(query.id, res)
}

module.exports = {cRoutersRoles, rRoutersRoles, uRoutersRoles, dRoutersRoles}