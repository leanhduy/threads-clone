import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import {
    ActivityIcon,
    CreateIcon,
    HomeIcon,
    MoreVertIcon,
    ProfileIcon,
    SearchIcon,
    ThreadLinkIcon,
} from '../utils/icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { NewThreadContext } from '../context/context'

export default function Navbar() {
    const { handleOpen } = useContext(NewThreadContext)
    return (
        <AppBar sx={{ backgroundColor: 'white' }}>
            <Toolbar sx={{ alignItems: 'center', display: 'flex' }}>
                <ThreadLinkIcon />
                <Box
                    sx={{
                        alignItems: 'center',
                        display: { xs: 'flex', md: 'flex' },
                        flexGrow: 1,
                        justifyContent: 'center',
                        columnGap: 8,
                    }}
                >
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                    <Link to="/search">
                        <SearchIcon />
                    </Link>
                    <CreateIcon handler={handleOpen} />
                    <Link to="/activity">
                        <ActivityIcon />
                    </Link>
                    {/* TODO: Replace :id with global user id */}
                    <Link to="/user/:id">
                        <ProfileIcon />
                    </Link>
                </Box>
                <MoreVertIcon />
            </Toolbar>
        </AppBar>
    )
}
