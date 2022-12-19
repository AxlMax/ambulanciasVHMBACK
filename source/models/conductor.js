const mongoose = require('mongoose')

const conductorSchema = mongoose.Schema({
    name : String,
    age  : Number,
    cc   : {
        type : Number,
        unique : true
    },
    relation: Array
}, {versionKey : false})

conductorSchema.pre('save', function(next){
    const conductor = this

    conductor.relation = ['ambulancia']

    return next()
})

module.exports = mongoose.model('conductor',conductorSchema)
