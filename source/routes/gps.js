var services =  require('../services/gps')
var indexer = require('../indexers/gps')
const middleware = require('../controller/login')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router