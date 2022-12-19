var services =  require('../services/roles')
var indexer = require('../indexers/roles')
var middleware = require('../middleware/sensor')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router