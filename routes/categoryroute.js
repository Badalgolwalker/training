const express = require("express")
const { categoryCreate,createSubcategory,update,Delete } = require("../controller/categorycontroller")
const router = express.Router()


router.post("/create",categoryCreate)
router.post("/update/:id", update)
router.get("/delete/:id", Delete)

// router.post("/subcategory",createSubcategory)


module.exports = router