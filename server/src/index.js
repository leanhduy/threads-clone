import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    // Configure the server options
    context: async () => {
      // Leverage the RESTDataSource's caching feature
      const { cache } = server;
    },
  });
}

// Start the server
startApolloServer();
