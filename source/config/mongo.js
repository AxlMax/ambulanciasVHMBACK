require("dotenv").config() // saca la informacion de las varibles de .env la variables process
const mongoose = require('mongoose') // libreria para la conexion con mongo

const dbConnect = () => {
    /*
    procces = {
       DB_URI:*****************,
       PORT:***** 
    }
    */

    const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@${process.env.DB_INFO}/${process.env.DB_NAME}`;
    //const DB_URI = process.env.DB_URI;
    
    // variable para definir la condicion de entrada a la base de datos
    const mongooseArgs = {
        useNewUrlParser: true,
    }

    //  arrow function callback que se ejecuta cuando se conecta a la base de datos __init__
    const callback = (err, res) => {
        if(!err){
            console.log("****** Conexion exitosa *******")
        }else{
            console.log("****** error en la conexion *****")
            console.log(err)
        }
    }

    // el objecto mongoose utiliza el metodo connect llama a la URI que es la llave y utiliza el callback
    mongoose.connect(DB_URI,mongooseArgs,callback)
}

module.exports = dbConnect;