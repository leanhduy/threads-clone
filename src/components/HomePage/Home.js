import { Container } from '@mui/material'
import CreateNew from './CreateNew'
import Navbar from './Navbar'
import ThreadList from './ThreadList'
import SwitchModeButton from './SwitchModeButton'
import { useState } from 'react'
import { switchModeButtonStyle } from '../utils/customStyles'
import { Outlet } from 'react-router'
import CreateNewDialog from './CreateNewDialog'
import { NewThreadContext } from '../context/context'

const Home = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const handleOpen = () => {
        setOpenDialog(true)
    }
    const handleClose = () => {
        setOpenDialog(false)
    }
    const [followingMode, setFollowingMode] = useState(true)
    const toggleMode = () => {
        setFollowingMode((mode) => !mode)
    }
    return (
        <NewThreadContext.Provider value={{ handleOpen }}>
            <Navbar />
            <Container sx={{ width: '80%' }}>
                {window.location.pathname === '/' ? (
                    <>
                        <CreateNew
                            handleClose={handleClose}
                            handleOpen={handleOpen}
                        />
                        <ThreadList />
                        <SwitchModeButton
                            mode={followingMode}
                            toggleMode={toggleMode}
                            style={switchModeButtonStyle}
                        />
                    </>
                ) : (
                    <Outlet />
                )}
                {/* Create Dialog */}
                <CreateNewDialog
                    openDialog={openDialog}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                />
            </Container>
        </NewThreadContext.Provider>
    )
}

export default Home
