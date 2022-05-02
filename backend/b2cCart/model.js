const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Product is required!"],
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required!"],
  },
});

const B2CCart = mongoose.models["b2ccart"] || mongoose.model("b2ccart", schema);
module.exports = B2CCart;
