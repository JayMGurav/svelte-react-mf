const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required!"],
  },
});

const B2BCart = mongoose.models["b2bcart"] || mongoose.model("b2bcart", schema);
module.exports = B2BCart;
