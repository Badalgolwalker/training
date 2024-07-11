const express = require("express")
const { createcart,read } = require("../controller/cartcontroller")

const router = express.Router()

router.post("/create",createcart)
router.get("/read",read)

module.exports = router