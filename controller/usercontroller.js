
const { catchAsyncError } = require("../middleware/catchAsyncError.JS")
const userModel = require("../modals/usermodels")
const ErrorHandler = require("../utils/errorhandler")
const { sendmail } = require("../utils/nodemailer")
const {gettoken} = require("../utils/sendtoken")

require("dotenv").config()


exports.userhome = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.id).exec()
  res.json(user)

})


exports.usersignup = catchAsyncError(async (req, res, next) => {

 const User =  await userModel.findOne({email:req.body.email}).exec()
if(User){
  return res.json("user already register")
}
  const user = await new userModel(req.body).save()
gettoken(user,201,res)
})


exports.usersignin= catchAsyncError(async(req,res,next) =>{

  const user = await userModel.findOne({email:req.body.email}).select("+password").exec()

  if(!user)return next(new ErrorHandler("user not found ",404))

  const isMatch = user.comparePassword(req.body.password)
  if(!isMatch) return next(new ErrorHandler("wrong creadentials",500))

    // res.json(user)
    gettoken(user,200,res)


})

exports.foregt = catchAsyncError(async(req,res,next) =>{
    const user = await userModel.findOne({email:req.body.email}).exec()
  
    if(!user)return next(new ErrorHandler("this emai is not exist in ourdtabase",404))

        const url = `${process.env.FRONTEND_URL}/password/${user._id}`

        sendmail(req,res,next,url)

        res.json({user,url})

})

exports.id = catchAsyncError(async(req,res,next) =>{
  const user = await userModel.findById(req.params.id).exec()
// if(user.resetPasswordToken == "1"){
//   user.resetPasswordToken = "0"
  user.password = req.body.password
  await user.save()
// }
// else{
//   return next(new ErrorHandler("TNvalid Reset Password Lnk! Please try again", 500))
// }

  res.status(200).json({
          message:"Password has been changed successfully"
  })
})

exports.userresetpassword = catchAsyncError(async(req,res,next) =>{
  const user  = await userModel.findById(req.id).exec() 
  user.password = req.body.password
  await user.save()

  gettoken(user,201,res)
})


exports.userupdate = catchAsyncError(async (req, res, next) => {
  await userModel.findByIdAndUpdate(req.params.id,req.body).exec()
res.status(200).json({
   success:true,
   message:"user updated successfully",

})
})

exports.usersignout= catchAsyncError(async(req,res,next) =>{
  res.clearCookie("token")
  res.json({message:"succeeefully logout"})
})

