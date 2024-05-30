const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { schema } = require('./schema.js')
const { createContext } = require('./context.js')

async function start() {
  // create server with nexus schema
  const server = new ApolloServer({ schema })
  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 4000 },
  })

  console.log(`\
  🚀 Server ready at: ${url}`)
}

// Start the server
start()
