const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { schema } = require('./schema.js')
const { createContext } = require('./context.js')

// Default to port 8001, but use the environment variable PORT if available
const PORT = process.env.PORT || 8001

async function start() {
  // create server with nexus schema
  const server = new ApolloServer({ schema })
  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: PORT },
  })

  // Construct the base URL
  const baseUrl = process.env.RENDER_EXTERNAL_URL || url

  console.log(`\
  🚀 Server ready at: ${baseUrl}`)
}

// Start the server
start()
