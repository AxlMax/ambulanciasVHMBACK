const mongoose = require('mongoose')

const ambulanciaSchema = new mongoose.Schema({
    placa: {
        type : String, 
        unique : true
    },
    ubicacion:{
        type : String,
    },
    id_hospital:{
        type : Array,
        default : []
    },
    id_conductor:{
        type : Array,
        default : []
    },
    id_gps:{
        type : Array,
        default : []
    },
    relation: Array

}, {versionKey : false})

ambulanciaSchema.pre('save', function(next){
    const ambulancia = this

    ambulancia.relation = ['user']

    return next()
})


module.exports = mongoose.model('ambulancia', ambulanciaSchema)