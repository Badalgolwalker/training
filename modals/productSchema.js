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

image:Buffer,
})

module.exports = mongoose.model("product",
   productSchema
)