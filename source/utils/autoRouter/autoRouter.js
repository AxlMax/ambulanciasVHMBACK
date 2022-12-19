var express = require('express');
var {OAuth} = require("../../middleware/oauth")
var router = express.Router();


const autoRouter = (indexer, services, middleware) => {
    indexer.forEach((value, index) => {

        if (Object.keys(value).length == 2 && value.service != "oauth"){
            router?.[value.method]("/" + value.service, OAuth ,(req, res) => services?.[value.service](req,res))
        }else if(Object.keys(value).length == 3){
            router?.[value.method]("/" + value.service,  [OAuth, middleware?.[value.middleware]] ,(req, res) => services?.[value.service](req,res))
        }else{
            router?.[value.method]("/" + value.service ,(req, res) => services?.[value.service](req,res))
        }
    })

    return router
}
module.exports = autoRouter