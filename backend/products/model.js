const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fullname is required!!"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Price is required!!"],
  },
  img: {
    type: String,
  },
  brand: {
    type: String,
  },
});

const Product = mongoose.models["product"] || mongoose.model("product", schema);
module.exports = Product;
