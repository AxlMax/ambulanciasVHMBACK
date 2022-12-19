const indexAmbulancia = [
    {
        method  : "post",
        service : "Cambulancia",
    },
    {
        method  : "get",
        service : "RambulanciabyId",
    },
    {
        method  : "patch",
        service : "UambulanciabyId",
    },
    {
        method  : "delete",
        service : "Dambulancia",
    },
    {
        method  : "patch",
        service : "linkHospital",
    },
    {
        method  : "patch",
        service : "linkConductor",
    },
    {
        method  : "patch",
        service : "linkGps",
    },
    {
        method  : "get",
        service : "RgpsByambulancia",
    },
]

module.exports = indexAmbulancia