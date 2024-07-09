exports.gettoken = (user,statusCode,res) =>{
  const token = user.getjwttoken()

  const options = {
    epires:new Date(
      Date.now()+ 24*60*60*1000
    ),
    httpOnly:true
  }
  res.status(statusCode).cookie("token",token,options).json({success:true,id:user._id,token})
}