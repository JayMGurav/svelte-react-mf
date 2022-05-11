const b2cQueryResolvers = {
  async getB2CCart(_parent, _args, { B2CCart }) {
    try {
      return await B2CCart.find({}).exec();
    } catch (err) {}
  },
  async getB2CCartQuantity(_parent, _args, { B2CCart }) {
    try {
      return await B2CCart.countDocuments({}).exec();
    } catch (err) {}
  },
};

const b2cMutationResolvers = {
  async addProductToB2CCart(
    _parent,
    { productId, quantity },
    { Product, B2CCart }
  ) {
    try {
      if (Product.findById(productId).exec()) {
        return await B2CCart.findOneAndUpdate(
          { product: productId },
          {
            $inc: { quantity },
          },
          { new: true, upsert: true }
        );
      } else {
        throw new Error("Product does not exist!");
      }
    } catch (err) {
      console.log(err);
    }
  },
  async removeProductFromB2CCart(_parent, { productId }, { B2CCart }) {
    try {
      const deletedDoc = await B2CCart.findOneAndRemove({ product: productId });
      return Boolean(deletedDoc);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = {
  Query: b2cQueryResolvers,
  Mutation: b2cMutationResolvers,
};
