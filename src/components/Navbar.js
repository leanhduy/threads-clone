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
} from './icons'
import { Button, Container } from '@mui/material'

const pages = ['Home', 'Search', 'New Thread', 'Activity', 'Account']

export default function Navbar() {
    return (
        <Box>
            <AppBar color="transparent">
                <Container maxWidth="xl">
                    <Toolbar
                        // disableGutters
                        sx={{ alignItems: 'center', display: 'flex' }}
                    >
                        <ThreadLinkIcon />
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: { xs: 'flex', md: 'flex' },
                                flexGrow: 1,
                                justifyContent: 'center',
                                columnGap: 5,
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
                </Container>
            </AppBar>
        </Box>
    )
}
