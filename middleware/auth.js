 
 const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/errorhandler")
const { catchAsyncError } = require("./catchAsyncError.JS")

 exports.isAuthenticated = catchAsyncError(async(req,res,next) =>{
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];


if (!token) {
  return next(new ErrorHandler("pls login first", 401))
}
const {id} = jwt.verify(token,process.env.jwtSecret)
req.id = id
next()

 })