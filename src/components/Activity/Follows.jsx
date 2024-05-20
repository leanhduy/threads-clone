import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material'
import { useOutletContext } from 'react-router-dom'
import { convertTimeUnit } from '../utils/helpers'

const Follows = () => {
    const [activities] = useOutletContext()

    return (
        activities.length > 0 &&
        activities.map((user) => (
            <Grid
                key={user.id}
                container
                spacing={1}
                sx={{ margin: '2rem 0 1rem' }}
            >
                <Grid item xs={3} sm={3} md={2} lg={2}>
                    <Avatar
                        sx={{ margin: '0 auto', width: 40, height: 40 }}
                        src={user.avatarURL}
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
                            textAlign: 'start',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                display: 'inline-block',
                                marginRight: '.25rem',
                                color: '#000',
                            }}
                        >
                            {user.user_name}
                        </Typography>
                        <Typography
                            variant="span"
                            sx={{ display: 'inline-block' }}
                        >
                            {convertTimeUnit(user.followOn)}
                        </Typography>
                        <Typography variant="body1">Followed you</Typography>
                    </Box>
                    <Button
                        variant="contained"
                        disableElevation
                        sx={{
                            border: '1px solid #b0b3b8',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            color: '#000',
                            fontSize: '1rem',
                            fontWeight: 600,
                            padding: '.25rem 1.25rem',
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: '#000',
                                color: '#fff',
                            },
                        }}
                    >
                        Follow Back
                    </Button>
                </Grid>
            </Grid>
        ))
    )
}

export default Follows
