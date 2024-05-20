import { ThemeProvider } from '@emotion/react'
import customTheme from './utils/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './HomePage/Navbar'
import { useState } from 'react'
import {
    NewThreadContext,
    NotificationContextProvider,
} from './context/context'
import { Container } from '@mui/material'
import Home from './HomePage/Home'
import Following from './Following/Following'
import Search from './Search/Search'
import Activity from './Activity/Activity'
import Profile from './Profile/Profile'
import PostDetails from './Post/PostDetails'
import NewPostDialog from './HomePage/NewPostDialog'
import Follows from './Activity/Follows'
import Replies from './Activity/Replies'
import Mentions from './Activity/Mentions'
import Quotes from './Activity/Quotes'
import Reposts from './Activity/Reposts'
function App() {
    const [openDialog, setOpenDialog] = useState(false)
    const handleOpen = () => {
        setOpenDialog(true)
    }
    const handleClose = () => {
        setOpenDialog(false)
    }

    return (
        <ThemeProvider theme={customTheme}>
            <NotificationContextProvider>
                <NewThreadContext.Provider
                    value={{ handleOpen, handleClose, openDialog }}
                >
                    <BrowserRouter>
                        <Navbar />
                        <Container
                            sx={{
                                alignItems: 'center',
                                margin: '5rem auto',
                                width: '70%',
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="following"
                                    element={<Following />}
                                />
                                <Route path="/search" element={<Search />} />
                                <Route path="activity" element={<Activity />}>
                                    <Route
                                        path="follows"
                                        element={<Follows />}
                                    />
                                    <Route
                                        path="replies"
                                        element={<Replies />}
                                    />
                                    <Route
                                        path="mentions"
                                        element={<Mentions />}
                                    />
                                    <Route path="quotes" element={<Quotes />} />
                                    <Route
                                        path="reposts"
                                        element={<Reposts />}
                                    />
                                </Route>
                                <Route path="/user/:id" element={<Profile />} />
                                <Route
                                    path="/post/:id"
                                    element={<PostDetails />}
                                />
                            </Routes>
                        </Container>
                        <NewPostDialog
                            openDialog={openDialog}
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                        />
                    </BrowserRouter>
                </NewThreadContext.Provider>
            </NotificationContextProvider>
        </ThemeProvider>
    )
}

export default App
