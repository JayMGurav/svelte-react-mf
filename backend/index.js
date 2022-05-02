const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const mongoose = require("mongoose");

const Product = require("./products/model");
const B2BCart = require("./b2bCart/model");
const B2CCart = require("./b2cCart/model");
const typeDefs = require("./typedefs");
const resolvers = require("./resolver");

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
