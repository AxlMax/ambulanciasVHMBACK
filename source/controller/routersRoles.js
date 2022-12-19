const routersRolesModel = require('../models/routersRoles')

//Create

const cRoutersRoles = async (body) =>{
    const rout = await new rolesModel(body)
    try{
        rout.save()
        return { rol: rout, error:NaN}
    }catch{
        const error = "Error en controlador"
        return {rol:NaN, error : error}
    }
}
//Read
const rRoutersRoles = async (res) =>{
    await routersRolesModel.find({}).exec((error, data)=>{
        res.send(data)
   })
}
//Update
const uRoutersRoles = (id, body, res)=>{
    const rout = routersRolesModel.findByIdAndUpdate(
        id,
        {$set:body}, 
        (error, data) => res.send(data)
    )
}

//Delete
const dRoutersRoles = (id, res)=>{
    const rout = routersRolesModel.findByIdAndDelete(
        id,
        (error, data) => res.send(data)
    )
}

module.exports = {cRoutersRoles, rRoutersRoles, uRoutersRoles, dRoutersRoles}