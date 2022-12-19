var services =  require('../services/conductor')
var indexer = require('../indexers/conductor')
const middleware = require('../controller/login')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router