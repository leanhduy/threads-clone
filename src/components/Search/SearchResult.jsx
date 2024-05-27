import { Divider, Grid, Avatar, Button, Typography, Box } from '@mui/material'
import { useEffect } from 'react'
const SearchResult = ({ user }) => {
    return (
        <>
            <Grid
                container
                spacing={1}
                sx={{ width: '100%', marginTop: '1rem' }}
            >
                <Grid item xs={3} sm={3} md={2} lg={2}>
                    {/* Avatar */}

                    <Avatar
                        sx={{ margin: '0 auto', width: 48, height: 48 }}
                        src={user && user.avatarURL}
                    />
                    {/* Username */}
                </Grid>
                <Grid
                    item
                    xs={9}
                    sm={9}
                    md={10}
                    lg={10}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            columnGap: 1,
                            // display: 'flex',
                            // alignItems: 'center',
                        }}
                    >
                        <Typography variant="body1" fontWeight={'bold'}>
                            {user && user.user_name}
                        </Typography>
                        <Typography variant="body2">
                            {user && user.bio}
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        // disabled
                        sx={{
                            borderRadius: '10px',
                            height: '2.5rem',
                            padding: '0 2rem',
                            width: '3rem',
                        }}
                    >
                        Follow
                    </Button>
                </Grid>
            </Grid>
            <Divider />
        </>
    )
}

export default SearchResult
