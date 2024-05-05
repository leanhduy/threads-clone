import { ThemeProvider } from '@emotion/react'
import Home from './HomePage/Home'
import customTheme from './utils/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Following from './Following/Following'
import Search from './Search/Search'
import Activity from './Activity/Activity'
import Profile from './Profile/Profile'
import Post from './Post/Post'
function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Following />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/activity" element={<Activity />} />
                    {/* <Route path="/activity/followed" element={<TBD />} />
                    <Route path="/activity/following" element={<TBD />} /> */}
                    <Route path="/user/:id" element={<Profile />} />
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
                <Home />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
