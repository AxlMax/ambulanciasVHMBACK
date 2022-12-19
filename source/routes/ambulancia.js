var services =  require('../services/ambulancia')
var indexer = require('../indexers/ambulancia')
const middleware = require('../controller/login')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router