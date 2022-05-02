const { createServer } = require("http");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginDrainHttpServer,
} = require("apollo-server-core");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");
const mongoose = require("mongoose");

const Product = require("./products/model");
const B2BCart = require("./b2bCart/model");
const B2CCart = require("./b2cCart/model");
const typeDefs = require("./typedefs");
const resolvers = require("./resolver");
const MONGO_URI =
  "mongodb+srv://poc:poc123@cluster0.joutl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/ws",
});

const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
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
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(), // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
  playground: true,
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });
})();

httpServer.listen(3002, () => {
  console.log(
    `Server is now running on http://localhost:3002${server.graphqlPath}`
  );
});
