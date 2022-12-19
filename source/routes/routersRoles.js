var services =  require('../services/routersRoles')
var indexer = require('../indexers/routersRoles')
var middleware = require('../middleware/sensor')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router