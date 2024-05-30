import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Pages from './pages'
import GlobalStyles from './styles'

const root = ReactDOM.createRoot(document.getElementById('root'))
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <GlobalStyles />
            <Pages />
        </ApolloProvider>
    </React.StrictMode>
)
