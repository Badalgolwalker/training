const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
      product:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
      }],
      quantity:{
            type:Number,
            Default:1
      },
      user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
      }
})
module.exports = mongoose.model("Cart", cartSchema);
