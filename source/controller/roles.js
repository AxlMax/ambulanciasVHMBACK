const rolesModel = require('../models/roles')

//Create
const cRol =  async (body) =>{
    const rol = await new rolesModel(body)
    var err = rol.joiValidate(body)
    rol.save()
        .then (() => res.status(200).send(rol))
        .catch(() => {
            if(err.hasOwnProperty('error')){
                res.status(400).send(err.error.details)
            }else{
                res.status(500).send("ya existe el Rol Animal")
            }})
}
//Read
const rRol =  async (res) => {
    await rolesModel.find({}).exec((error, data)=>{
        res.send(data)
   })
}  

//Update
const uRol =  (id, body, res) => {
    rolesModel.findByIdAndUpdate(
        id,
        {$set:body}, 
        (error, data) => res.send(data)
    )
}

//Delete
const dRol =  (id, res) => {
    rolesModel.findByIdAndDelete(
        id,
        (error, data) => res.send(data)
    )
}
//Add Routs
const addRoutsRol = (id, routs, res) =>{
    rolesModel.findByIdAndUpdate(
        id,
        {$set:routs}, 
        (error, data) => res.send(data)
    )
}

module.exports = {cRol, rRol, uRol, dRol, addRoutsRol}