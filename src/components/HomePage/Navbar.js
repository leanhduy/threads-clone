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
import { Button, Container } from '@mui/material'

export default function Navbar() {
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
                    <HomeIcon />
                    <SearchIcon />
                    <CreateIcon />
                    <ActivityIcon />
                    <ProfileIcon />
                </Box>
                <MoreVertIcon />
            </Toolbar>
        </AppBar>
    )
}
