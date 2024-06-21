import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import 'react-toastify/dist/ReactToastify.css'
import { App, UserProvider } from './components'

// ? Determine if it is the Development environment (NODE_ENV is not set or has value of 'development')
const isDevelopment =
    !process.env.NODE_ENV === 'develoment' ||
    process.env.NODE_ENV === 'development'

// ? Construct the URI to GraphQL Server API
const URI = isDevelopment
    ? import.meta.env.VITE_GRAPHQL_API_SERVER_DEV
    : import.meta.env.VITE_GRAPHQL_API_SERVER

const root = ReactDOM.createRoot(document.getElementById('root'))
const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
})

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <UserProvider>
                <App />
            </UserProvider>
        </ApolloProvider>
    </React.StrictMode>
)
