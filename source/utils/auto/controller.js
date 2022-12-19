const { model } = require('mongoose')
const Error = require('../error/errorHandler')
const ERRORMSG = "error CONTROLADOR"

const create = (args) => {
    const {model, body, res} = args

    const document = new model(body)
    Error.errorSaving(document, res)

}

const find = (args) => {
    const {model, id, res} = args
    console.log(id)
    model.findById(id,(err, doc) => {Error.errorHandler(err, res, ERRORMSG, doc)})
}

const Update = (args) => {
    const {model, body, id, res , msg} = args
    model.findByIdAndUpdate(id, {$set : body}, (error, doc) => {
        if(res){
            Error.errorHandler(error, res, ERRORMSG, msg)
        }
    })
}

const Delete = (args) => {
    const {model, id, res, key,msg} = args
    
    model.findById(id, (error, doc) => {
        doc['relation'].map((value, index) => {
            const relationModel = require(`../../models/${value}`)
            
            const filter = {}
            filter[key] = id

            relationModel.find(filter, (error, docR) => {
                if(docR.length > 0){
                    docR.map((value, index) => {

                        let auxid = [] 

                        value[key].map((v,i) => {
                            if(v != id){
                                auxid.push(v)
                            }
                        })

                        value[key] = auxid

                        let valueUpdate = {}
                        let idU

                        Object.keys(value['_doc']).map((vu,iu) => {
                            if(vu != "_id"){
                                valueUpdate[vu] = value['_doc'][vu]
                            }else{
                                idU = value['_doc']["_id"].toString() 
                            }

                        })

                        Update({
                            "model" : relationModel,
                            "body"  : valueUpdate,
                            "id"    : idU
                        })

                    })

                    model.findByIdAndDelete(id, (err, doc) => Error.errorHandler(err, res, ERRORMSG, msg))
                }else{
                    model.findByIdAndDelete(id, (err, doc) => Error.errorHandler(err, res, ERRORMSG, msg)) 
                }
            })
        })
    })
    
}

/**
 * 
 * @param {*} args
 * @param model modelo al cual se va vincular la informacion
 * @param idc id del registro al cual se le vinculara el id
 * @param idl id del registro que sera vinculado
 * @param key nombre del array en el cual se almacenara el registro del id
 * @param res la respuesta que se dara al usuario 
 */

const Link = (args) => {
    const {model, idc, idl, key, res} = args
    
    model.findById(idc, (error, doc) => {
        doc?.[key].push(idl)
        Error.errorSaving(doc, res)
    })
}

/**
 * esta funcion es para obtener la informacion que se encuentre linkiada a un registro
 * 
 * @param  idc    este es el id que se va ha consultar
 * @param  modelc este es el modelo que se utiliza para buscar la id
 * @param  keyc   la llave del array de ids
 * @param  modell modelo que se quiere obtener la informacion
 * @param  res    response
 */

const Rlink = (args) => {
    const {idc, modelc, modell, keyc, res} = args

    console.log("asasa")

    modelc.findById(idc, (error, doc) => {
    
        const idKeys = doc?.[keyc]
        let resolveKeys = []

            idKeys.map(async(v, i) => {
                const data =  await modell.findById(v)
                resolveKeys.push(data)
                

                if(resolveKeys.length == idKeys.length){
                    res.send(200, resolveKeys)
                }
            })

    })
}

module.exports = {create, find, Update, Delete, Link, Rlink}