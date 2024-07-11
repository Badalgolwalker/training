const express = require("express")
const { categoryCreate,createSubcategory,update,Delete,categoryfetch } = require("../controller/categorycontroller")
const router = express.Router()


router.post("/create",categoryCreate)
router.get("/allfetch",categoryfetch)
router.post("/update/:id", update)
router.get("/delete/:id", Delete)

// router.post("/subcategory",createSubcategory)


module.exports = router