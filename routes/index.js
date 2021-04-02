const router = require("express").Router()
//controller functions
const { index_get, index_post } = require("./controllers/index")

router.get( `/`, index_get )
router.post( `/`, index_post )

module.exports = router
