const mongoose = require('mongoose');

const routersRolesSchema = new mongoose.Schema({
    icon:{
        type:String
    },
    name:{
        type:String
    } 
}, {versionKey:false})

module.exports = mongoose.model('routers', routersRolesSchema, 'routers')
