import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { MoreVertIcon, ThreadLinkIcon } from './icons'
import { Button, Container } from '@mui/material'

const pages = ['Home', 'Search', 'New Thread', 'Activity', 'Account']

export default function Navbar() {
    return (
        <Box>
            <AppBar color="transparent">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ThreadLinkIcon />
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: 'center',
                                display: { xs: 'flex', md: 'flex' },
                            }}
                        >
                            {pages.map((page) => {
                                return (
                                    <Button sx={{ color: 'black' }}>
                                        {page}
                                    </Button>
                                )
                            })}
                        </Box>
                        <MoreVertIcon />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
