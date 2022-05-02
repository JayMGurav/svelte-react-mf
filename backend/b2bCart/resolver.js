const b2bQueryResolvers = {
  async getB2BCart(_parent, _args, { B2BCart }) {
    try {
      return await B2BCart.find({}).exec();
    } catch (err) {}
  },
};

const b2bMutationResolvers = {
  async addProductToB2BCart(_parent, { id, quantity }, { Product, B2BCart }) {
    try {
      if (Product.findById(id).exec()) {
        return await B2BCart.create({ product: id, quantity });
      } else {
        throw new Error("Product does not exist");
      }
    } catch (err) {}
  },
};

module.exports = {
  Query: b2bQueryResolvers,
  Mutation: b2bMutationResolvers,
};
