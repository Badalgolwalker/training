const express = require("express")
const router = express.Router()
const { userhome, usersignup,usersignin,usersignout,foregt,id,userresetpassword,userupdate } = require("../controller/usercontroller")
const { isAuthenticated } = require("../middleware/auth")

router.get("/",isAuthenticated, userhome)

//post user/signup
router.post("/user/signup",usersignup)

//post user/signin
router.post("/user/signin",usersignin)

//get student/signout
router.get("/user/signout",usersignout)


// //post forget-link

router.post("/user/forget-link",foregt)

// //post forget-link/:id
router.post("/user/forget-link/:id",id)


// post /student/reset-password/:studentid
router.post("/user/reset-password/:id",isAuthenticated, userresetpassword)


//post/user/update/:id
router.post("/user/update/:id",isAuthenticated,userupdate)








module.exports = router