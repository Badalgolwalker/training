exports.generaterror = (err,req,res,next) =>{
  // console.log(err.statusCode)
  const statuscode = err.statusCode || 500


  res.status(statuscode).json({
    message: err.message,
    errName: err.name,
    stack:err.stack

  })
}