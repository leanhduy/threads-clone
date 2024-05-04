import { Container } from '@mui/material'
import CreateNew from './CreateNew'
import Navbar from './Navbar'
import ThreadList from './ThreadList'
import SwitchModeButton from './SwitchModeButton'
import { useState } from 'react'
import { switchModeButtonStyle } from '../utils/customStyles'

const Home = () => {
    const [followingMode, setFollowingMode] = useState(true)
    const toggleMode = () => {
        setFollowingMode((mode) => !mode)
    }
    return (
        <>
            <Navbar />
            <Container sx={{ width: '80%' }}>
                <CreateNew />
                <ThreadList />
                <SwitchModeButton
                    mode={followingMode}
                    toggleMode={toggleMode}
                    style={switchModeButtonStyle}
                />
            </Container>
        </>
    )
}

export default Home
