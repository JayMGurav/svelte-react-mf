const b2cQueryResolvers = {
  async getB2CCart(_parent, _args, { B2CCart }) {
    try {
      return await B2CCart.find({}).exec();
    } catch (err) {}
  },
};

const b2cMutationResolvers = {
  async addProductToB2CCart(_parent, { id, quantity }, { Product, B2CCart }) {
    try {
      if (Product.findById(id).exec()) {
        return await B2CCart.create({ product: id, quantity });
      } else {
        throw new Error("Product does not exist");
      }
    } catch (err) {}
  },
};

module.exports = {
  Query: b2cQueryResolvers,
  Mutation: b2cMutationResolvers,
};
