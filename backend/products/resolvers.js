const productQueryResolvers = {
  async product(_parent, { id }, { Product }) {
    try {
      return await Product.findById(id).exec();
    } catch (error) {
      throw new Error("Error getting product: ", error.message);
    }
  },
  async products(_parent, _args, { Product }) {
    try {
      return await Product.find({}).exec();
    } catch (error) {
      throw new Error("Error getting books: " + error.message);
    }
  },
};

const productMutationResolvers = {
  async addProduct(_parent, { input }, { Product }) {
    try {
      return await Product.create({
        ...input,
      });
    } catch (error) {
      throw new Error("Error adding book: " + error.message);
    }
  },
};

module.exports = {
  Query: productQueryResolvers,
  Mutation: productMutationResolvers,
};
