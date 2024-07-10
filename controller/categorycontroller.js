const { catchAsyncError } = require("../middleware/catchAsyncError.JS")
const categoryModel = require("../modals/category")
const Errorhandler = require("../utils/errorhandler")


exports.categoryCreate = catchAsyncError(async(req,res,next) =>{

const Category = await categoryModel.findOne({name:req.body.categoryName}).exec()
if(Category){
  return next (new Errorhandler("category alraedy existr",401))
}
  const category = await categoryModel.create({name:req.body.categoryName})
res.json(category)
})

exports.update = catchAsyncError(async(req,res,next) =>{


  const categroy = await categoryModel.findByIdAndUpdate({_id:req.params.id},{

    name:req.body.categoryName,


  },{new:true}).exec()

  res.json(categroy)

})

exports.Delete = catchAsyncError(async(req,res,next) =>{
  const category = await categoryModel.findByIdAndDelete({_id:req.params.id}).exec()
res.json("category delete successfully")

})