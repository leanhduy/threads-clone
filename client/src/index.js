import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Pages from './pages'
import GlobalStyles from './styles'
import { UserContext } from './context'
import { mockUser } from './mock'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
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
