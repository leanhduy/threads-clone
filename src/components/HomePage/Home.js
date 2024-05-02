import { Box, Container } from '@mui/material'
import CreateNew from './CreateNew'
import Navbar from './Navbar'
import { ThemeProvider } from '@emotion/react'
import customDialogTheme from '../utils/theme'

const Home = () => {
    return (
        <>
            <Navbar />
            <CreateNew />
        </>
    )
}

export default Home
