const router = require("express").Router()
//controller functions
const { index_get } = require("./controllers/index")

router.get( "/", index_get )

module.exports = router





