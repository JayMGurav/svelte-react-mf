const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const mongoose = require("mongoose");
const Product = require("./products/model");
const B2BCart = require("./b2bCart/model");
const B2CCart = require("./b2cCart/model");

// const products = [
//   {
//     name: "Hiking Backpack 20 L - NH Arpenaz 500",
//     id: "p1890166",
//     price: 24.99,
//     img: "https://contents.mediadecathlon.com/p1890166/k$e9a14a2d01194375eac54ff0cb83b202/sq/8550925.jpg?format=auto&f=320x320",
//     brand: "QUECHUA",
//   },
//   {
//     name: "JOGFLOW 500.1 Men's Running Shoes",
//     id: "p2153181",
//     price: 34.99,
//     img: "https://contents.mediadecathlon.com/p2153181/k$be8bc3d9588b54af503e67bfa50b498b/sq/8665519.jpg?format=auto&f=320x320",
//     brand: "KALENJI",
//   },
// ];

const MONGO_URI =
  "mongodb+srv://poc:poc123@cluster0.joutl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (req, res) => {
    // establish mongoDB connection
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return {
      req,
      res,
      Product,
      B2BCart,
      B2CCart,
    };
  },
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  playground: true,
});

// The `listen` method launches a web server.
server
  .listen({
    port: 3002,
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
