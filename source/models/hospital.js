const mongoose = require('mongoose')

const hospitalSchema = mongoose.Schema({
    name    : String,
    address :{
        type : String,
        unique :true
    },
    relation : Array
}, {versionKey: false})

hospitalSchema.pre('save', function(next){
    const hospital = this

    hospital.relation = ['ambulancia']

    return next()
})

module.exports = mongoose.model('hospital', hospitalSchema)

