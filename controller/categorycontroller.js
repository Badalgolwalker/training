const { catchAsyncError } = require("../middleware/catchAsyncError.JS")
const categoryModel = require("../modals/category")
const Errorhandler = require("../utils/errorhandler")


exports.categoryCreate = catchAsyncError(async(req,res,next) =>{
const Category = await categoryModel.findOne({name:req.body.categoryname}).exec()
if(Category){
  return next (new Errorhandler("category alraedy existr",401))
}
  const category = await new categoryModel(req.body).save()
res.json(category)
})
