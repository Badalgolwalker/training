const express = require("express")
const router = express.Router()
const { createSubcategory } = require("../controller/subcategorycontroller")



router.post("/subcategory",createSubcategory)


module.exports = router