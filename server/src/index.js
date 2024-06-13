const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { schema } = require('./schema.js')
const { createContext } = require('./context.js')

// ? Load environment variables for development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env.development' })
}

// ? Determine if it is Development environment
const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

// ? Default to port 8001, but use the environment variable PORT if available
const PORT = isDevelopment
  ? process.env.GRAPHQL_SERVER_PORT_DEV
  : process.env.GRAPHQL_SERVER_PORT || 8001

async function start() {
  // ? create server with nexus schema
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
