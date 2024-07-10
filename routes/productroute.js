const express = require("express")
const { createProduct,readProduct,readsingleProduct,update,Delete } = require("../controller/productController")
const router = express.Router()
const upload = require("../utils/multer")

router.post("/create",upload.single("image"), createProduct)
router.get("/read", readProduct)
router.post("/readsingle/:id", readsingleProduct)
router.post("/update/:id", update)
router.get("/delete/:id", Delete)

module.exports = router