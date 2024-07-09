const express = require("express")
const { categoryCreate,createSubcategory } = require("../controller/categorycontroller")
const router = express.Router()


router.post("/create",categoryCreate)

// router.post("/subcategory",createSubcategory)


module.exports = router