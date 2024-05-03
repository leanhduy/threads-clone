import { Box, Container } from '@mui/material'
import CreateNew from './CreateNew'
import Navbar from './Navbar'
import { ThemeProvider } from '@emotion/react'
import customDialogTheme from '../utils/theme'
import ThreadList from './ThreadList'

const Home = () => {
    return (
        <>
            <Navbar />
            <Container sx={{ width: '80%' }}>
                <CreateNew />
                <ThreadList />
            </Container>
        </>
    )
}

export default Home
