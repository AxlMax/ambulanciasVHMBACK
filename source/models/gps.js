const mongoose =  require('mongoose')

const gpsSchema = mongoose.Schema({
    lat : Number,
    lon : Number,
    relation : Array
}, {versionKey : false})

gpsSchema.pre('save', function(next){
    const gps = this

    gps.relation = ['ambulancia']

    return next()
})

module.exports = mongoose.model('gps', gpsSchema)
