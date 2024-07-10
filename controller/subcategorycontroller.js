const { catchAsyncError } = require("../middleware/catchAsyncError.JS")
const categoryModel = require("../modals/category")
const subcategoryModel = require("../modals/subcategory")


exports.createSubcategory = catchAsyncError(async(req,res,next) =>{

  const category = await categoryModel.findOne({name:req.body.categoryName}).exec()
  if(!category){
    return next (new Errorhandler("first create category",404))
  }
  const subCategory = await subcategoryModel.findOne({name:req.body.Subcategoryname}).exec()
  if(subCategory){
    return next (new Errorhandler("subcategory alraedy existr",401))
  }
  const SubCategory = await new subcategoryModel({name:req.body.Subcategoryname,
  categoryid:category._id  
}).save()
 res.json(SubCategory)
})