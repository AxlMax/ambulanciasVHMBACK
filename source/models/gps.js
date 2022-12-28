const mongoose =  require('mongoose')

const gpsSchema = mongoose.Schema({
    lat :   mongoose.Schema.Types.Decimal128,
    lon :   mongoose.Schema.Types.Decimal128,
    apiKey : String,
    relation : Array
}, {versionKey : false})

gpsSchema.pre('save', function(next){
    const gps = this
    gps.lat = 0
    gps.lon = 0
    gps.relation = ['ambulancia', 'user']

    return next()
})

module.exports = mongoose.model('gps', gpsSchema)
