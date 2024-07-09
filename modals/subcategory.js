const mongoose = require("mongoose")


const SubcategorySchema = new mongoose.Schema({
 name:{
   type:String,
   require:true,
   unique:true
 },

 categoryid:[{
  type:mongoose.Schema.Types.ObjectId,ref:"category"
 }]
 
})

module.exports = mongoose.model("Subcategory",SubcategorySchema)