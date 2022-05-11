const b2bQueryResolvers = {
  async getB2BCart(_parent, _args, { B2BCart }) {
    try {
      return await B2BCart.find({}).exec();
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async getB2BCartQuantity(_parent, _args, { B2BCart }) {
    try {
      return await B2BCart.countDocuments({}).exec();
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

const b2bMutationResolvers = {
  async addProductToB2BCart(
    _parent,
    { productId, quantity },
    { Product, B2BCart }
  ) {
    try {
      if (Product.findById(productId).exec()) {
        return await B2BCart.findOneAndUpdate(
          { product: productId },
          {
            $inc: { quantity },
          },
          { new: true, upsert: true }
        );
      } else {
        throw new Error("Product does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  },
  async removeProductFromB2BCart(_parent, { productId }, { B2BCart }) {
    try {
      const deletedDoc = await B2BCart.findOneAndRemove({ product: productId });
      return Boolean(deletedDoc);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = {
  Query: b2bQueryResolvers,
  Mutation: b2bMutationResolvers,
};
