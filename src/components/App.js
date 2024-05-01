import { ThemeProvider } from '@emotion/react'
import Home from './HomePage/Home'
import customTheme from './utils/theme'
function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <Home />
        </ThemeProvider>
    )
}

export default App
