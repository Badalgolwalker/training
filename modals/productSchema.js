const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    uniques:true
  },
  description: {
    type:String,
    required:true,
    uniques:true
  },
  price:{
    type:Number,
    required:true
  },
 
  stock: {
    type:Number,
    required:true
  },
  status:String,
  categoryId: { type:mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
  // subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', required: true },

image:Buffer,
})

module.exports = mongoose.model("product",
   productSchema
)