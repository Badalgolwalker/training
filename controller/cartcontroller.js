const { catchAsyncError } = require("../middleware/catchAsyncError.JS")
const cartModel = require("../modals/cartSchema")
exports.createcart = catchAsyncError(async(req,res,next) =>{
  const { userId, productId, quantity } = req.body;
const cart =  await cartModel.create({
    product:productId,
    quantity,
    user:userId
})
res.json("product added successfully")
})


exports.read = catchAsyncError(async(req,res,next) =>{
  const cart = await cartModel.find().populate('product').exec()
  res.json(cart)
})