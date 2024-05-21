import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import { useOutletContext } from 'react-router-dom'
import { convertTimeUnit } from '../utils/helpers'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const Follows = () => {
    //#region HOOKS
    const [activities] = useOutletContext()

    const [followers, setFollowers] = useState([])
    useEffect(() => {
        setFollowers(activities)
    }, [])
    //#endregion

    //#region EVENT HANDLERS
    // TODO: Update this function logic after database is integrated
    const toggleFollowing = (user) => {
        // ? MOCK: Toggle the property `isFollowing` of user mock object between (true/false)
        const newFollowers = followers.map((f) => {
            if (f.id === user.id) {
                f.isFollowing = !f.isFollowing
            }
            return f
        })
        setFollowers([...newFollowers])
    }
    //#endregion

    //#region STYLED COMPONENTS
    const FollowButton = styled(Button)(() => ({
        border: '1px solid #b0b3b8',
        backgroundColor: '#fff',
        borderRadius: '10px',
        color: '#000',
        fontSize: '1rem',
        fontWeight: 600,
        padding: '.25rem 1.25rem',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.followed': {
            borderColor: '#b0b3b8',
            color: '#b0b3b8',
        },
    }))
    //#endregion

    return (
        followers.length > 0 &&
        followers.map((user) => (
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
                        paddingBottom: '.875rem',
                        borderBottom: '1px solid #b0b3b8',
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
                                color: '#000',
                                display: 'inline-block',
                                fontWeight: '600',
                                marginRight: '.375rem',
                            }}
                        >
                            {user.user_name}
                        </Typography>
                        <Typography
                            variant="span"
                            sx={{ display: 'inline-block' }}
                        >
                            {convertTimeUnit(user.followMeAt)}
                        </Typography>
                        <Typography variant="body1">Followed you</Typography>
                    </Box>
                    <FollowButton
                        variant="contained"
                        disableElevation
                        onClick={() => toggleFollowing(user)}
                        className={user.isFollowing ? 'followed' : ''}
                    >
                        {user.isFollowing ? 'Following' : 'Follow back'}
                    </FollowButton>
                </Grid>
            </Grid>
        ))
    )
}

export default Follows
