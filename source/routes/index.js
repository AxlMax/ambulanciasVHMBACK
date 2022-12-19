const express = require("express") // libreria para realizar backend
const getFileNames = require("../utils/file/getFileNames")

const router = express.Router()

var cont = 0

getFileNames(process.env.PROJECT_DIR + '/indexers').forEach(name => {
    console.log(name) 
    router.use(`/${name}`,require(`./${name}.js`))
    
})


module.exports = router