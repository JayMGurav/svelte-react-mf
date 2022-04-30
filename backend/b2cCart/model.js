const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  products: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const B2CCart = mongoose.models["cart"] || mongoose.model("cart", schema);
module.exports = B2CCart;
