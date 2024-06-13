import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Pages from './pages'
import GlobalStyles from './styles'
import { UserContext } from './context'
import { mockUser } from './mock'
import 'react-toastify/dist/ReactToastify.css'

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
            <UserContext.Provider value={mockUser}>
                {/* Currently using mock user to simulate the logged in user. Replace with the logged in user later when Authentication feature is implemented */}
                <GlobalStyles />
                <Pages />
            </UserContext.Provider>
        </ApolloProvider>
    </React.StrictMode>
)
