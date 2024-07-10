const categoryModel = require("../modals/category")
const SubcategoryModel = require("../modals/subcategory")

const { catchAsyncError } = require("../middleware/catchAsyncError.JS")
const ProductModel = require("../modals/productSchema")
exports.createProduct = catchAsyncError(async(req,res,next) =>{
const {  productname,
  price,description,
  stock,
  status
 
} = req.body

//    const Category = await categoryModel.findone({name:categoryname}).exec()
//    const SubCategory = await SubcategoryModel.findone({name:Subcategoryname}).exec()
const product = await ProductModel.create({
  name: productname,
  description,
  price,
  stock,
 status,
 image:req.file.buffer
})
res.json(product)


})

exports.readProduct = catchAsyncError(async(req,res,next) =>{
  const product = await ProductModel.find().exec()
  res.json(product)
})

exports.readsingleProduct = catchAsyncError(async(req,res,next) =>{

  const product = await ProductModel.findById({_id:req.params.id}).exec()
  res.json(product)
})

exports.update = catchAsyncError(async(req,res,next) =>{


  const product = await ProductModel.findByIdAndUpdate({_id:req.params.id},{

    name:req.body.productname,
    price:req.body.price,
    description:req.body.description,
    stock:req.body.stock,
    status:req.body.status,

  },{new:true}).exec()

  res.json(product)

})

exports.Delete = catchAsyncError(async(req,res,next) =>{
  const product = await ProductModel.findByIdAndDelete({_id:req.params.id}).exec()
res.json("product delete successfully")

})