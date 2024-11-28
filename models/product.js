const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category:{
    type:String,
    required:true,
  },
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: "kg", // Can be 'kg' or 'unit'
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isBestSeller: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
