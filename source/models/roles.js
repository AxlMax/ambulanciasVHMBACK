const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    routId:{
        type: [String]
    } 
}, {versionKey:false})

module.exports = mongoose.model('roles', rolesSchema, 'rol')


