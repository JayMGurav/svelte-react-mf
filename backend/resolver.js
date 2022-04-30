const { mergeResolvers } = require("@graphql-tools/merge");

const productResolvers = require("./products/resolvers");
const b2bResolvers = require("./b2bCart/resolver");
const b2cResolvers = require("./b2cCart/resolver");

const initialResolvers = {
  Query: {
    _: () => {
      return "Query";
    },
  },
  Mutation: {
    _: () => {
      return "Mutation";
    },
  },
};

const resolvers = [
  initialResolvers,
  productResolvers,
  b2bResolvers,
  b2cResolvers,
];
const mergedResolvers = mergeResolvers(resolvers);

module.exports = mergedResolvers;
